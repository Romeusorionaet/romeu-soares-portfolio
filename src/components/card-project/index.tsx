'use client'

import Image from 'next/image'
import ClipLoader from 'react-spinners/ClipLoader'

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
  return (
    <article className="w-[20rem] rounded-md">
      <div className="relative w-full overflow-hidden">
        <h2 className="mb-4 text-center font-bold hover:scale-105">
          <a
            href={pageURL}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {title}
          </a>
        </h2>

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
                className="h-full w-full rounded-md object-fill"
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
                className="mx-auto h-full w-full object-fill"
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
      </div>
    </article>
  )
}
