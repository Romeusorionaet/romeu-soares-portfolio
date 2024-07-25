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
    <div className="flex h-72 w-96 flex-col items-center rounded-md p-2">
      <h2>{title}</h2>

      <a
        href={pageURL}
        target="_blank"
        className="h-44 w-full duration-700"
        rel="noreferrer"
      >
        <Image
          width={36}
          height={36}
          sizes="100vw"
          className="mx-auto h-full w-full rounded-full border-4 border-transparent object-cover"
          src={previewDesktop}
          alt="Loading animation"
        />
      </a>
    </div>
  )
}
