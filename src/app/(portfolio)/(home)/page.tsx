import { CardsStacksBackEnd } from '@/components/cards-stacks/cards-stacks-back-end'
import { CardsStacksFrontEnd } from '@/components/cards-stacks/cards-stacks-front-end'
import { TopicsNavigation } from '@/components/topics-navigation'
import { routes } from '@/constants/route'
import { Code2Icon } from 'lucide-react'
import { Lumiflex } from 'uvcanvas'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="absolute left-0 top-0 -z-10 w-full max-lg:h-hbp_1 lg:h-screen">
        <Lumiflex />
      </div>

      <section className="section_limiter group relative flex h-hbp_0 flex-col justify-center gap-4 overflow-hidden px-4 lg:h-hbp_2">
        <Image
          width={1000}
          height={1000}
          src="/backgrounds/rocket.webp"
          alt=""
          className="absolute right-0 top-20 -z-10 h-72 w-40 opacity-50 md:-right-20 md:top-44 md:h-96 md:w-56 xl:right-0"
        />
        <h1 className="style_title_1 mix-blend-exclusion max-md:text-center">
          Programador Web
        </h1>

        <div className="space-y-4 rounded-md p-2 duration-500 group-hover:bg-black/10 md:w-1/2">
          <h2 className="text-lg mix-blend-exclusion md:text-xl">
            Me chamo Romeu Soares e sou Programador Web
          </h2>
          <p className="mix-blend-exclusion max-md:text-sm">
            Sua visita é sempre bem-vinda aqui! Preparei esta página para
            compartilhar todos os meus conhecimentos em Programação Web,
            apresentarei tudo de maneira descontraída e agradável. Aproveite
            para explorar!
          </p>
        </div>

        <div className="absolute bottom-24 right-4 md:bottom-40">
          <div className="group relative flex items-center justify-end gap-1 rounded-md border border-white p-2 mix-blend-exclusion">
            <Code2Icon className="duration-300 group-focus-within:h-6 group-focus-within:w-6 group-hover:h-6 group-hover:w-6 md:h-0 md:w-0" />
            <Link
              href={`${routes.codev}`}
              className="text-base uppercase lg:text-xl"
            >
              codev (blog)
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-white bg-[url('/backgrounds/pyramids.png')] bg-contain bg-bottom bg-no-repeat px-4 pb-4 pt-10 text-dark-1 lg:bg-cover">
        <div className="section_limiter">
          <h2 className="mb-4 text-4xl font-bold">Programação Web</h2>

          <div className="space-y-8">
            <p>
              Programação web é o processo de criar sites e aplicativos que
              funcionam na internet. Envolve escrever código para a parte que o
              usuário vê (front-end) e a parte que o servidor gerencia
              (back-end). Front-end lida com o design e a interação do usuário,
              usando tecnologias como HTML, CSS e JavaScript. Back-end cuida da
              lógica do servidor, banco de dados e APIs, usando linguagens como
              Python, JavaScript (Node.js), PHP, entre outras. O objetivo é
              construir sites e aplicativos funcionais e atraentes que os
              usuários possam acessar de qualquer lugar com uma conexão à
              internet.
            </p>

            <div className="space-y-4">
              <h3 className="font-bold">
                As principais ferramentas que utilizo
              </h3>
              <CardsStacksFrontEnd />
              <CardsStacksBackEnd />
            </div>
          </div>
        </div>

        <TopicsNavigation />
      </section>
    </main>
  )
}
