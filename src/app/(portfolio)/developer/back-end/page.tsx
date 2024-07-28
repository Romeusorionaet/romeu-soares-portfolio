import { MovingBackgroundBalls } from '@/components/moving-card/moving-background-balls'
import Image from 'next/image'
import nodejs from '@/assets/img/stacks/back-end/nodejsLogo.svg'
import tools from '@/assets/img/others/tools.png'
import production from '@/assets/img/others/production.png'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BackEnd() {
  return (
    <main className="relative overflow-hidden px-4 pb-28">
      {Array.from({ length: 10 }).map((_, index) => (
        <MovingBackgroundBalls key={index} />
      ))}

      <h1 className="style_title_1 online-block mx-auto mt-40 w-5/6 text-center">
        Meus conhecimentos como programador Back-End
      </h1>

      <section className="section_limiter mt-28 flex flex-col gap-6 pb-28">
        <div>
          <div className="mb-8 flex items-center gap-2">
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

          <div className="group cursor-pointer">
            <p className="font-bold">Testes:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Testes Unitários e End-2-End: Experiência com o Vitest para
                testar a funcionalidade completa das aplicações.
              </li>
              <li>Supertest: Utilizado para testar endpoints HTTP.</li>
            </ul>
          </div>

          <div
            tabIndex={0}
            className="scrollbar group cursor-pointer focus:p-2"
          >
            <p className="font-bold">Frameworks e Conceitos:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Fastify e Express: Adquiri habilidades no uso de ambos
                frameworks para o desenvolvimento back-end.
              </li>
              <li>
                SOLID: Princípios de design para criar código sustentável e
                flexível.
              </li>
              <li>
                Clean Architecture: Estrutura para separar as responsabilidades
                e manter o código organizado.
              </li>
              <li>
                DDD (Domain-Driven Design): Abordagem para modelar complexidade
                de domínios.
              </li>
              <li>
                Padrões de Design: Familiaridade com o Factory Pattern e o
                Repository Pattern para criar um código eficiente.
              </li>
            </ul>
          </div>

          <div
            tabIndex={0}
            className="scrollbar group cursor-pointer focus:p-2"
          >
            <p className="font-bold">Autenticação e Autorização:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                JWT (JSON Web Tokens): Experiência com tokens de autenticação
                para segurança de aplicações.
              </li>
              <li>
                OAuth: Implementação para integração com provedores de
                autenticação como Google, Facebook, etc.
              </li>
            </ul>
          </div>

          <div
            tabIndex={0}
            className="scrollbar group cursor-pointer focus:p-2"
          >
            <p className="font-bold">Docker:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Docker: Containerização de aplicações para ambiente de
                desenvolvimento.
              </li>
            </ul>
          </div>

          <div
            tabIndex={0}
            className="scrollbar group cursor-pointer focus:p-2"
          >
            <p className="font-bold">Caching:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Redis: Uso para melhorar a performance de leitura de dados.
              </li>
            </ul>
          </div>

          <div
            tabIndex={0}
            className="scrollbar group cursor-pointer focus:p-2"
          >
            <p className="font-bold">Banco de Dados e ORM:</p>
            <ul className="hover_expand_list scrollbar">
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
            </ul>
          </div>
        </div>

        <div>
          <div>
            <div className="mb-8 flex items-center gap-2">
              <h2 className="text-xl font-bold">Produção</h2>

              <Image
                width={36}
                height={36}
                sizes="100vw"
                src={production}
                alt="icone de produção"
                className="h-10 w-10 rounded-full bg-white object-cover"
              />
            </div>

            <div tabIndex={0} className="group cursor-pointer focus:p-2">
              <p className="font-bold">Deploy e Build:</p>
              <ul className="hover_expand_list scrollbar">
                <li>
                  Entendimento de como fazer build e deploy de aplicações Nodejs
                </li>
                <li>
                  <a
                    href="https://render.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ferramentas como Render para deploy de aplicação Nodejs
                  </a>
                </li>
                <li>Supabase para hospedagem de banco de dados</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-center gap-2">
            <h2 className="text-xl font-bold">Ferramentas e Ecossistema</h2>

            <Image
              width={36}
              height={36}
              sizes="100vw"
              src={tools}
              alt="logomarca html"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>

          <div tabIndex={0} className="group cursor-pointer">
            <p className="font-bold">Frameworks:</p>
            <ul className="hover_expand_list scrollbar">
              <li>Fastify</li>
              <li>Express</li>
            </ul>
          </div>

          <div tabIndex={0} className="group cursor-pointer">
            <p className="font-bold">ORM:</p>
            <ul className="hover_expand_list scrollbar">
              <li>Prisma: Usado para interagir com bancos de dados.</li>
            </ul>
          </div>

          <div tabIndex={0} className="group cursor-pointer">
            <p className="font-bold">
              Sistema de gerenciamento de banco de dados relacional (RDBMS):
            </p>
            <ul className="hover_expand_list scrollbar">
              <li>PostgreSQL</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div tabIndex={0} className="group cursor-pointer">
            <p className="font-bold">Sistema de controle de versão:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Git: Sistema de controle de versão para gerenciamento de
                código-fonte.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section_limiter flex items-center justify-end gap-2">
        <Link
          className="rounded-md p-1 no-underline duration-500 hover:scale-105"
          href={'/developer/front-end'}
        >
          Conhecimentos em Front-end
        </Link>
        <ArrowRight />
      </section>
    </main>
  )
}
