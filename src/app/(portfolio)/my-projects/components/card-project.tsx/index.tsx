import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ProjectsProps {
  previewDesktop: string
  previewMobile: string
  pageURL: string
  title: string
}

export function CardProject({
  previewDesktop,
  previewMobile,
  pageURL,
  title,
}: ProjectsProps) {
  const [preview, setPreview] = useState('')

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

  return (
    <div className="flex h-[28rem] w-52 flex-col items-center rounded-md p-2 lg:h-[16rem] lg:w-[24rem]">
      <h2>{title}</h2>

      <a
        href={pageURL}
        target="_blank"
        className="h-full w-full duration-700"
        rel="noreferrer"
      >
        {preview && (
          <Image
            width={36}
            height={36}
            sizes="100vw"
            className="mx-auto h-full w-full rounded-md border-4 border-transparent object-contain"
            src={preview}
            alt={`Preview of ${title}`}
          />
        )}
      </a>
    </div>
  )
}
