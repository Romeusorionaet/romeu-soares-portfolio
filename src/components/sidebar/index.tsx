'use client'

import { routes } from '@/constants/route'
import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="fixed top-20 z-10 rounded-md bg-zinc-800/90 p-4 md:absolute md:left-4 md:top-44">
      <nav>
        <ul className="flex gap-4 font-light max-md:flex-wrap md:flex-col">
          <li>
            <Link
              href={`${routes.about}`}
              className="no-underline hover:underline"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href={`${routes.myProjects}`}
              className="no-underline hover:underline"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href={`${routes.developer}/${routes.frontEnd}`}
              className="no-underline hover:underline"
            >
              Front-end
            </Link>
          </li>
          <li>
            <Link
              href={`${routes.developer}/${routes.backEnd}`}
              className="no-underline hover:underline"
            >
              Back-end
            </Link>
          </li>
          <li>
            <Link
              href={`${routes.setup}`}
              className="no-underline hover:underline"
            >
              Setup
            </Link>
          </li>
          <li>
            <Link
              href={`${routes.codev}`}
              className="no-underline hover:underline"
            >
              Codev
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
