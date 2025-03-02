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
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { routes } from '@/constants/route'

export function HeaderBlog() {
  const pathname = usePathname()
  const parts = pathname.split('/')
  const pageName = parts[parts.length - 1]

  return (
    <header className="fixed left-0 z-20 flex w-full flex-col items-center gap-8 border-b border-white/50 bg-background px-4 py-4">
      <h1 className="style_title_1 uppercase">{pageName}</h1>

      <section className="section_limiter flex gap-8 max-md:justify-center">
        <Link href={`${routes.home}`} className="no-underline hover:scale-105">
          Início
        </Link>

        <nav>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:scale-105">
              <span>Outros Blogs</span> <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-cyan-100">
              <DropdownMenuLabel>Outros temas em produção</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={`${routes.codev}`}>codev (blog)</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </section>
    </header>
  )
}
