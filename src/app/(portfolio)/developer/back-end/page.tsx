'use client'

import Image from 'next/image'
import nodejs from '@/assets/img/stacks/back-end/nodejsLogo.png'
import Link from 'next/link'
import { ArrowRight, Menu } from 'lucide-react'
import { routes } from '@/constants/route'
import { useState } from 'react'
import { topicsKnowledgeBackEnd } from '@/constants/topics-knowledge-back-end'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MovingBackgroundBalls } from '@/components/moving-card/moving-background-balls'

export default function BackEnd() {
  const [topic, setTopic] = useState(topicsKnowledgeBackEnd.TEST)

  const pathUrl = `${routes.codev}/${routes.detailsIssueGithub}`

  const handleShowTopic = (value: string) => {
    setTopic(value)
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-28 pt-56">
      {Array.from({ length: 10 }).map((_, index) => (
        <MovingBackgroundBalls key={index} />
      ))}

      <h1 className="style_title_1 online-block mx-auto w-4/6 text-center">
        Meus conhecimentos como programador Back-End
      </h1>

      <section className="section_limiter mt-28 flex gap-2 pb-28 max-md:flex-col">
        <section className="w-full justify-between border-white max-md:flex md:w-56 md:border-r">
          <div className="mb-8 flex items-center justify-center gap-2">
            <h2 className="text-xl font-bold">Nodejs</h2>
            <Image
              width={36}
              height={36}
              sizes="100vw"
              src={nodejs}
              alt="logomarca react"
              className="h-10 w-10 rounded-full bg-white object-cover p-0.5"
            />
          </div>

          <div className="flex flex-col gap-4 max-md:hidden">
            {Object.entries(topicsKnowledgeBackEnd).map(([key, value]) => (
              <button
                type="button"
                key={key}
                data-value={topic === value}
                onClick={() => handleShowTopic(value)}
                className="text-left font-bold data-[value=true]:text-green-500"
              >
                {value}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-2">
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-cyan-50">
                <DropdownMenuSeparator />
                {Object.entries(topicsKnowledgeBackEnd).map(([key, value]) => (
                  <DropdownMenuItem key={key}>
                    <button
                      type="button"
                      data-value={topic === value}
                      onClick={() => handleShowTopic(value)}
                      className="text-left font-bold data-[value=true]:text-green-500"
                    >
                      {value}
                    </button>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>

        <section id="sectionContentList" className="min-h-full w-full pl-4">
          <ul data-value={topic === topicsKnowledgeBackEnd.TEST}>
            <li>
              Testes Unitários e End-2-End: Experiência com o Vitest para testar
              a funcionalidade completa das aplicações.
            </li>
            <li>Supertest: Utilizado para testar endpoints HTTP.</li>
          </ul>

          <ul
            data-value={
              topic === topicsKnowledgeBackEnd.FRAMEWORKS_AND_CONCEPTS
            }
          >
            <li>
              Fastify e Express: Adquiri habilidades no uso de ambos frameworks
              para o desenvolvimento back-end.
            </li>
            <li>
              SOLID: Princípios de design para criar código sustentável e
              flexível.
            </li>
            <li>
              Clean Architecture: Estrutura para separar as responsabilidades e
              manter o código organizado.
            </li>
            <li>
              DDD (Domain-Driven Design): Abordagem para modelar complexidade de
              domínios.
            </li>
            <li>
              Padrões de Design: Familiaridade com o Factory Pattern e o
              Repository Pattern para criar um código eficiente.
            </li>
          </ul>

          <ul
            data-value={
              topic === topicsKnowledgeBackEnd.AUTHENTICATION_AUTHORIZATION
            }
          >
            <li>
              JWT (JSON Web Tokens): Experiência com tokens de autenticação para
              segurança de aplicações.
            </li>
            <li>
              OAuth: Implementação para integração com provedores de
              autenticação como Google, Facebook, etc.
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeBackEnd.DOCKER}>
            <li>
              Docker: Containerização de aplicações para ambiente de
              desenvolvimento.
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeBackEnd.CACHING}>
            <li>Redis: Uso para melhorar a performance de leitura de dados.</li>
          </ul>

          <ul data-value={topic === topicsKnowledgeBackEnd.DATABASE_ORM}>
            <li>
              PostgreSQL: Experiência com banco de dados relacional poderoso e
              confiável.
            </li>
            <li>
              MySQL: Conhecimento em banco de dados relacional amplamente
              utilizado.
            </li>
            <li>
              Prisma: ORM para Node.js que facilita a interação com bancos de
              dados relacionais.
            </li>
            <li>
              <Link href={`${pathUrl}/35`}>Mapa relacional de Banco</Link>
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeBackEnd.DEPLOY_BUILD}>
            <li>
              Entendimento de como fazer build e deploy de aplicações Nodejs
            </li>
            <li>
              <a href="https://render.com/" target="_blank" rel="noreferrer">
                Ferramentas como Render para deploy de aplicação Nodejs
              </a>
            </li>
            <li>Supabase para hospedagem de banco de dados</li>
          </ul>

          <ul data-value={topic === topicsKnowledgeBackEnd.VERSION_CONTROL}>
            <li>
              Git: Sistema de controle de versão para gerenciamento de
              código-fonte.
            </li>
          </ul>
        </section>
      </section>

      <section className="section_limiter flex items-center justify-end gap-2">
        <Link
          className="rounded-md p-1 no-underline duration-500 hover:scale-105"
          href={`${routes.developer}/${routes.frontEnd}`}
        >
          Conhecimentos em Front-end
        </Link>
        <ArrowRight />
      </section>
    </main>
  )
}
