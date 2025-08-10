'use client'

import { previewsProjects } from '@/lib/previews-projects'
import { useWidthScreen } from '@/hooks/use-width-screen'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperCore } from 'swiper'
import { Autoplay } from 'swiper/modules'
import { useRef } from 'react'
import 'swiper/css'
import { CardProject } from '../card-project'

export function CarouselPreviewsProjects() {
  const { widthScreen } = useWidthScreen()
  const swiperRef = useRef<SwiperCore | null>(null)

  const getSlidesPerView = () => {
    if (!widthScreen) return 1.2
    if (widthScreen > 1000) return 4.2
    if (widthScreen > 768 && widthScreen < 1000) return 2.5
    if (widthScreen <= 768 && widthScreen > 568) return 2.2
    if (widthScreen <= 568) return 1
    return 1.2
  }

  return (
    <div className="relative max-md:pl-16">
      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        className="swiper-button-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 p-2 text-white duration-300 hover:bg-black"
      >
        ◀
      </button>
      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        className="swiper-button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 p-2 text-white duration-300 hover:bg-black"
      >
        ▶
      </button>
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={getSlidesPerView()}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
      >
        {previewsProjects.map((item) => (
          <SwiperSlide key={item.id} className="wrapper-preview group">
            <div className="h-96 w-96 rounded-md p-3 group-hover:p-0 group-hover:duration-500">
              <CardProject
                pageURL={item.pageURL}
                previewDesktop={item.previewDesktop}
                previewMobile={item.previewMobile}
                title={item.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
