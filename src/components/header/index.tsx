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
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const socialMediaOptions = {
  GITHUB: 'github',
  LINKEDIN: 'linkedin',
  INSTAGRAM: 'instagram',
  WHATSAPP: 'whatsApp',
}

export function Header() {
  const [stateEventMouseHover, setStateEventMouseHover] = useState(false)
  const [showImg, setShowImg] = useState<StaticImageData | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

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
    <header className="fixed left-0 z-20 flex w-full items-center justify-between bg-background px-4 pb-4 pt-10">
      <section className="section_limiter flex justify-between">
        <nav
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <DropdownMenu open={menuOpen}>
            <DropdownMenuTrigger className="flex gap-2">
              <span>Menu</span> <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-cyan-50">
              <DropdownMenuSeparator />
              <ul>
                <li>
                  <DropdownMenuItem>
                    <Link href="/" className="no-underline">
                      Início
                    </Link>
                  </DropdownMenuItem>
                </li>
                <li>
                  <DropdownMenuItem>
                    <Link href="/about" className="no-underline">
                      Sobre
                    </Link>
                  </DropdownMenuItem>
                </li>
                <li>
                  <DropdownMenuItem>
                    <Link href="/my-projects" className="no-underline">
                      Projetos
                    </Link>
                  </DropdownMenuItem>
                </li>
                <li>
                  <DropdownMenuItem>
                    <Link href="/gear" className="no-underline">
                      Setup
                    </Link>
                  </DropdownMenuItem>
                </li>
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
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
              <DropdownMenuContent className="bg-cyan-50">
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
              <a href="" target="_blank" className="no-underline">
                Github
              </a>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(socialMediaOptions.LINKEDIN)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="" target="_blank" className="no-underline">
                LinkedIn
              </a>
            </li>
            <li
              onMouseEnter={() =>
                handleMouseEnter(socialMediaOptions.INSTAGRAM)
              }
              onMouseLeave={handleMouseLeave}
            >
              <a href="" target="_blank" className="no-underline">
                Instagram
              </a>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter(socialMediaOptions.WHATSAPP)}
              onMouseLeave={handleMouseLeave}
            >
              <a href="" target="_blank" className="no-underline">
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
      </section>
    </header>
  )
}
