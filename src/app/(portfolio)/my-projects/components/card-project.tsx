'use client'

import Image from 'next/image'
import { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

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
  const [showDescription, setShowDescription] = useState(false)

  const handleShowDescription = () => {
    if (showDescription === true) {
      setShowDescription(false)
    } else {
      setShowDescription(true)
    }
  }

  const contentBtn = showDescription ? 'Fechar' : 'Descrição'

  return (
    <article className="h-[30rem] w-[20rem] rounded-md">
      <div className="relative h-[26rem] w-full overflow-hidden">
        <a href={pageURL} target="_blank" rel="noreferrer">
          <h2 className="mb-4 text-center font-bold hover:scale-105">
            {title}
          </h2>
        </a>

        <div className="relative">
          <Image
            width={36}
            height={36}
            sizes="100vw"
            className="absolute -top-4 left-0 -z-10 h-[226px] w-full"
            src="/backgrounds/notebook.png"
            alt=""
          />

          <div className="mx-auto h-[128px] w-[198px]">
            {previewDesktop ? (
              <Image
                width={36}
                height={36}
                sizes="100vw"
                className="h-full w-full rounded-md object-cover"
                src={previewDesktop}
                alt={`pré visualização do projeto ${title}`}
              />
            ) : (
              <div className="pt-10 text-center">
                <ClipLoader color="#000" size={35} />
              </div>
            )}
          </div>

          <div className="h-[12rem] w-[8rem] rounded-md border-8 border-black bg-white">
            {previewMobile ? (
              <Image
                width={36}
                height={36}
                sizes="100vw"
                className="mx-auto h-full w-full object-cover"
                src={previewMobile}
                alt={`pré visualização do projeto ${title}`}
              />
            ) : (
              <div className="pt-16 text-center">
                <ClipLoader color="#000" size={35} />
              </div>
            )}
          </div>
        </div>

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
