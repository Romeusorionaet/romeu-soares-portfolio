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
  const [stateEventMouseHover, setStateEventMouseHove] = useState(false)
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

    if (!stateEventMouseHover) {
      setStateEventMouseHove(true)
    } else {
      // setShowImg(null)
      setStateEventMouseHove(false)
    }
  }
  return (
    <header className="flex items-center justify-between px-4 pt-10 text-mobile md:text-desktop">
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
            onMouseLeave={() => handleMouseEnter(socialMediaOptions.GITHUB)}
          >
            <a href="" target="_blank">
              Github
            </a>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(socialMediaOptions.LINKEDIN)}
            onMouseLeave={() => handleMouseEnter(socialMediaOptions.LINKEDIN)}
          >
            <a href="" target="_blank">
              LinkedIn
            </a>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(socialMediaOptions.INSTAGRAM)}
            onMouseLeave={() => handleMouseEnter(socialMediaOptions.INSTAGRAM)}
          >
            <a href="" target="_blank">
              Instagram
            </a>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(socialMediaOptions.WHATSAPP)}
            onMouseLeave={() => handleMouseEnter(socialMediaOptions.WHATSAPP)}
          >
            <a href="" target="_blank">
              WhatsApp
            </a>
          </li>
        </ul>
      </nav>

      <div className="absolute right-20 top-36 h-40 w-40 rounded-full border border-red-500 bg-white">
        {showImg && (
          <Image
            width={36}
            height={36}
            sizes="100vw"
            data-value={stateEventMouseHover}
            className="h-full w-full animate-bounce rounded-full opacity-100 duration-1000 data-[value=true]:opacity-100"
            src={showImg}
            alt="icone de mídia social"
          />
        )}
      </div>
    </header>
  )
}
