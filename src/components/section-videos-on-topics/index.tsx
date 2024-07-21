'use client'

import { useRef } from 'react'
import Image from 'next/image'
import bg2 from '../../assets/img/backgrounds-img/bg-2.png'
import { MovingStars } from '../moving-card/moving-stars'

export function SectionVideosOnTopics() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const handleMouseOver = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play()
      }
    })
  }

  const handleMouseOut = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    })
  }

  const videos = [
    {
      id: 1,
      src: '/video/boy-end-book.mp4',
      title: 'livros',
    },
    {
      id: 2,
      src: '/video/boy-end-book.mp4',
      title: 'livros',
    },
    {
      id: 3,
      src: '/video/boy-end-book.mp4',
      title: 'livros',
    },
    {
      id: 4,
      src: '/video/boy-end-book.mp4',
      title: 'livros',
    },
  ]

  return (
    <section
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="section_limiter relative mt-8 overflow-hidden rounded-lg p-4 text-foreground"
    >
      <Image
        width={36}
        height={36}
        sizes="100vw"
        className="absolute left-0 top-0 -z-10 h-full w-full"
        src={bg2}
        alt=""
      />

      <h2 className="mb-4 text-2xl font-bold">Temas variados</h2>

      <p>Preparei muito mais do que apenas conversar sobre programação!</p>

      {Array.from({ length: 30 }).map((_, index) => (
        <MovingStars key={index} />
      ))}

      <div className="flex w-full flex-wrap justify-center gap-4 py-8">
        {videos.map((item) => {
          return (
            <div
              key={item.id}
              className="group relative h-[5.5rem] w-[10rem] overflow-hidden rounded-md md:h-[8rem] md:w-[14rem] lg:h-[16rem] lg:w-[28rem]"
            >
              <h3 className="absolute bottom-0 left-2 z-10 font-slackey text-sm font-bold lg:text-base">
                {item.title}
              </h3>
              <video
                ref={(el) => {
                  videoRefs.current[item.id] = el
                }}
                className="h-full w-full duration-700 group-hover:scale-125"
                muted
                loop
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 h-full w-full bg-gradient-to-r from-black to-transparent duration-1000 group-hover:translate-x-[-200px]" />
            </div>
          )
        })}
      </div>
    </section>
  )
}
