'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ProjectsProps {
  previewDesktop: string
  previewMobile: string
  pageURL: string
  title: string
  description: string
}

export function CardProject({
  previewDesktop,
  previewMobile,
  pageURL,
  title,
  description,
}: ProjectsProps) {
  const [preview, setPreview] = useState('')
  const [showDescription, setShowDescription] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width > 1024) {
        setPreview(previewDesktop)
      } else {
        setPreview(previewMobile)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [previewDesktop, previewMobile])

  const handleShowDescription = () => {
    if (showDescription === true) {
      setShowDescription(false)
    } else {
      setShowDescription(true)
    }
  }

  const contentBtn = showDescription ? 'Fechar' : 'Descrição'

  return (
    <article className="flex h-[30rem] w-[20rem] flex-col justify-between gap-2 rounded-md lg:h-[16rem] lg:w-[24rem]">
      <div className="relative h-[26rem] w-full overflow-hidden">
        <h2 className="mb-2 text-center font-bold">{title}</h2>

        <a
          href={pageURL}
          target="_blank"
          rel="noreferrer"
          className="h-[24rem]"
        >
          {preview && (
            <Image
              width={36}
              height={36}
              sizes="100vw"
              className="mx-auto h-full w-full rounded-md object-fill lg:object-contain"
              src={preview}
              alt={`pré visualização do projeto ${title}`}
            />
          )}
        </a>

        <div
          data-value={showDescription}
          className="absolute top-0 hidden h-full data-[value=true]:flex"
        >
          <div className="flex h-full items-center">
            <p className="bg-background p-2 text-justify">{description}</p>
          </div>
        </div>
      </div>

      {description && (
        <button
          onClick={handleShowDescription}
          className="z-10 w-24 rounded-md bg-dark-1/50 p-1 hover:scale-105 hover:border focus:border"
        >
          {contentBtn}
        </button>
      )}
    </article>
  )
}
