'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import socialMedia from '../../assets/img/header-img/social-media.png'
import github from '../../assets/img/header-img/github.png'
import instagram from '../../assets/img/header-img/instagram.png'
import linkedin from '../../assets/img/header-img/linkedin.png'
import whatsApp from '../../assets/img/header-img/whatsApp.png'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

const socialMediaOptions = {
  GITHUB: 'github',
  LINKEDIN: 'linkedin',
  INSTAGRAM: 'instagram',
  WHATSAPP: 'whatsApp',
}

export function Header() {
  const [stateEventMouseHover, setStateEventMouseHover] = useState(false)
  const [showImg, setShowImg] = useState<StaticImageData | null>(null)

  const handleMouseEnter = (mouseOn: string) => {
    switch (mouseOn) {
      case socialMediaOptions.GITHUB:
        setShowImg(github)
        break

      case socialMediaOptions.LINKEDIN:
        setShowImg(linkedin)
        break

      case socialMediaOptions.INSTAGRAM:
        setShowImg(instagram)
        break

      case socialMediaOptions.WHATSAPP:
        setShowImg(whatsApp)
        break

      default:
        setShowImg(null)
        break
    }

    setStateEventMouseHover(true)
  }

  const handleMouseLeave = () => {
    setStateEventMouseHover(false)
  }

  return (
    <header className="fixed left-0 z-20 flex w-full items-center justify-between px-4 pt-10">
      <div className="section_limiter flex justify-between">
        <nav>
          <ul className="flex gap-8">
            <li>Início</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>SetUp</li>
            <li></li>
          </ul>
        </nav>

        <nav>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  width={36}
                  height={36}
                  sizes="100vw"
                  className="h-15 w-15"
                  src={socialMedia}
                  alt="icone de mídia social"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-cyan-100">
                <DropdownMenuLabel>Conecte-se</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Github</DropdownMenuItem>
                <DropdownMenuItem>LinkedIn</DropdownMenuItem>
                <DropdownMenuItem>Instagram</DropdownMenuItem>
                <DropdownMenuItem>WhatsApp</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <ul className="flex gap-8 max-md:hidden">
            <li
              onMouseEnter={() => handleMouseEnter(socialMediaOptions.GITHUB)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="" target="_blank">
                Github
              </a>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(socialMediaOptions.LINKEDIN)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="" target="_blank">
                LinkedIn
              </a>
            </li>
            <li
              onMouseEnter={() =>
                handleMouseEnter(socialMediaOptions.INSTAGRAM)
              }
              onMouseLeave={handleMouseLeave}
            >
              <a href="" target="_blank">
                Instagram
              </a>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(socialMediaOptions.WHATSAPP)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="" target="_blank">
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>

        <div
          data-value={stateEventMouseHover}
          className="absolute right-4 top-20 h-40 w-20 rounded-full bg-white opacity-100 duration-500 data-[value=false]:h-1 data-[value=true]:w-40 data-[value=true]:opacity-100 max-md:hidden"
        >
          <div className="relative h-full w-full">
            {showImg && (
              <Image
                width={36}
                height={36}
                sizes="100vw"
                data-value={stateEventMouseHover}
                className="h-full w-full rounded-full py-16 opacity-0 duration-500 data-[value=true]:py-4 data-[value=true]:opacity-100"
                src={showImg}
                alt="icone de mídia social"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
