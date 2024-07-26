'use client'

import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { BookOpenText, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { routes } from '@/constants/route'
import { SelectColorForEachRoute } from '@/utils/select-color-for-each-route'
import { TitleMap, TranslateTitle } from '@/utils/translate-title'

export function HeaderBlog() {
  const pathname = usePathname()
  const parts = pathname.split('/')
  const pageName = parts[parts.length - 1]

  const isInitialPageBLog = routes.includes(pageName)
  const colorTitle = SelectColorForEachRoute(pageName)

  const titleTranslations: TitleMap = {
    technology: 'Tecnologia',
  }

  const titleTranslated = TranslateTitle(pageName, titleTranslations)

  const title = isInitialPageBLog ? titleTranslated : <BookOpenText size={40} />

  return (
    <header className="fixed left-0 z-20 flex w-full flex-col items-center gap-8 border-b border-white/50 bg-background px-4 py-4">
      <h1 className={`style_title_1 ${colorTitle}`}>{title}</h1>

      <section className="section_limiter flex gap-8 max-md:justify-center">
        <Link href="/" className="no-underline hover:scale-105">
          Portfólio
        </Link>

        <nav>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:scale-105">
              <span>Outros Blogs</span> <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-cyan-100">
              <DropdownMenuLabel>
                (Outros temas estão em produção)
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Tecnologia</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </section>
    </header>
  )
}
