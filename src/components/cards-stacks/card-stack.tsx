'use client'

import { Tilt } from 'react-tilt'
import Image, { StaticImageData } from 'next/image'

interface Props {
  stacks: {
    id: number
    link: string
    file: StaticImageData
    description: string
  }[]
}

export function CardStack({ stacks }: Props) {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 2000,
    scale: 1.1,
    speed: 2000,
    transition: true,
    axis: null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 max-md:flex-col">
      {stacks.map((item) => {
        return (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="relative flex items-center justify-start gap-2 md:h-64 md:flex-col"
          >
            <Tilt options={defaultOptions} className="max-md:w-1/4">
              <Image
                width={36}
                height={36}
                sizes="100vw"
                src={item.file}
                alt="icone react"
                className="h-20 w-28"
              />
            </Tilt>

            <div className="z-10 w-3/4 md:w-52">
              <p className="text-sm hover:text-blue-500 md:text-center">
                {item.description}
              </p>
            </div>
          </a>
        )
      })}
    </div>
  )
}
