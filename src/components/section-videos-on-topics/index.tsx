'use client'

import { useRef, useEffect } from 'react'

export function SectionVideosOnTopics() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.error('Failed to play video:', error)
            })
          } else {
            video.pause()
            video.currentTime = 0
          }
        })
      },
      {
        threshold: 1,
      },
    )

    const currentVideoRefs = videoRefs.current

    currentVideoRefs.forEach((video) => {
      if (video) {
        observer.observe(video)
      }
    })

    return () => {
      currentVideoRefs.forEach((video) => {
        if (video) {
          observer.unobserve(video)
        }
      })
    }
  }, [])

  const videos = [
    {
      id: 1234,
      src: '/video/boy-end-book.mp4',
      title: 'Livros',
    },
    {
      id: 2345,
      src: '/video/example-movie.mp4',
      title: 'Filmes e Series',
    },
    {
      id: 7992,
      src: '/video/astronomia-astrologia.mp4',
      title: 'Astronomia / Astrologia',
    },
    {
      id: 1480,
      src: '/video/ufologia.mp4',
      title: 'Ufologia',
    },
  ]

  return (
    <section className="section_limiter mt-8 overflow-hidden rounded-lg p-4 text-foreground">
      <h2 className="mb-4 text-2xl font-bold">Temas variados</h2>

      <p>Preparei alguns temas, impossível você não se interessar por algum.</p>

      <div className="flex w-full flex-wrap justify-center gap-2 py-8 md:gap-4">
        {videos.map((item, index) => {
          return (
            <div
              key={item.id}
              className="group relative h-[5.5rem] w-[10rem] overflow-hidden rounded-md md:h-[8rem] md:w-[14rem] lg:h-[16rem] lg:w-[28rem]"
            >
              <h3 className="absolute bottom-0 left-2 z-10 font-slackey text-xs font-bold lg:text-base">
                {item.title}
              </h3>
              <video
                ref={(el) => {
                  videoRefs.current[index] = el
                }}
                className="h-full w-full border-4 border-transparent object-cover duration-700 focus:border-white group-hover:scale-125"
                muted
                loop
                onMouseEnter={(e) => {
                  e.currentTarget.play().catch((error) => {
                    console.error('Failed to play video:', error)
                  })
                }}
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
