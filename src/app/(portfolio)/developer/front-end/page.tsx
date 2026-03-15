'use client'

import react from '@/assets/img/stacks/front-end/reactLogo.png'
import Image from 'next/image'
import { MovingBackgroundBalls } from '@/components/moving-card/moving-background-balls'
import Link from 'next/link'
import { ArrowRight, Menu } from 'lucide-react'
import { routes } from '@/constants/route'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { topicsKnowledgeFrontEnd } from '@/constants/topics-knowledge-front-end'

export default function FrontEnd() {
  const [topic, setTopic] = useState(topicsKnowledgeFrontEnd.COMPONENTS)

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
        Meus conhecimentos como programador Front-End
      </h1>

      <section className="section_limiter mt-28 flex gap-2 pb-28 max-md:flex-col">
        <section className="w-full justify-between border-white max-md:flex md:w-56 md:border-r">
          <div className="mb-8 flex items-center justify-center gap-2">
            <h2 className="text-xl font-bold">React</h2>

            <Image
              width={36}
              height={36}
              sizes="100vw"
              src={react}
              alt="logomarca react"
              className="h-10 w-10 object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 max-md:hidden">
            {Object.entries(topicsKnowledgeFrontEnd).map(([key, value]) => (
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
                {Object.entries(topicsKnowledgeFrontEnd).map(([key, value]) => (
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
          <ul data-value={topic === topicsKnowledgeFrontEnd.COMPONENTS}>
            <li>
              <Link href={`${pathUrl}/2`}>
                Função e Classe: Explica os dois tipos de componentes.
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/3`}>
                Propriedades (props): Passagem de dados de pai para filho.
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/4`}>
                Ciclo de Vida - Métodos de ciclo de vida do componente.
              </Link>
            </li>
            <li>
              <Link href={`/${pathUrl}/5`}>
                Renderização Condicional - Renderização de componentes baseada
                em condições.
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/6`}>
                Composição vs. Herança - Composição combina componentes simples
                - herança usa classes base para estender funcionalidades.
              </Link>
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.HOOKS}>
            <li>
              <Link href={`${pathUrl}/14`}>
                useState: Gerencia o estado interno de um componente funcional.
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/10`}>
                useEffect: Executa efeitos colaterais após a renderização do
                componente.
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/9`}>
                useContext: Acessa o valor de um contexto React sem precisar de
                `props`.
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/7`}>
                Custom Hooks: Hooks personalizados para reutilizar lógica de
                componentes.
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/11`}>
                useMemo: Memoriza valores calculados para evitar recomputações
                desnecessárias, melhorando a performance.
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/8`}>
                useCallback: Memoriza funções para evitar re-criações
                desnecessárias.
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/13`}>
                useRef: Permite a criação de referências mutáveis que persistem
                entre renderizações.
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/12`}>
                useMutation: Parte da biblioteca react-query e é usado para
                lidar com operações que alteram dados
              </Link>
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.PROPS_STATE}>
            <li>
              <Link href={`${pathUrl}/17`}>
                Props: Dados passados de pai para filho (imutáveis)
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/16`}>
                Local vs. Global State: Estado local gerenciado dentro do
                componente vs. estado global gerenciado por bibliotecas como
                Redux ou Zustand
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/15`}>
                Imutabilidade: Prática de não modificar diretamente os objetos
                de estado, mas criar novos
              </Link>
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.STATE_MANAGER}>
            <li>
              <Link href={`${pathUrl}/19`}>
                React Context: Compartilhamento de estado entre componentes sem
                prop drilling
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/18`}>
                Zustand: Gerenciamento de estado
              </Link>
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.REACT_ROUTER}>
            <li>
              <Link href={`${pathUrl}/22`}>
                Parâmetros de URL: Extração e uso de parâmetros da URL
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/21`}>
                Lazy loading de rotas: Carregamento sob demanda de componentes
                de rota para otimizar o desempenho
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/20`}>
                Contexto de roteamento: Utilização do contexto do roteador para
                acessar informações de roteamento em qualquer componente
              </Link>
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.FORMS}>
            <li>
              <Link href={`${pathUrl}/23`}>
                Gerenciamento de formulários: Controle do estado e lógica dos
                formulários
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/24`}>
                Zod para validação: Biblioteca para validação de esquemas, tipos
                de dados e controle de erros
              </Link>
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.API_INTEGRATOR}>
            <li>
              <Link href={`${pathUrl}/25`}>
                Axios: Biblioteca popular para fazer requisições HTTP, com
                suporte a interceptadores e configuração fácil.
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/1`}>
                React Query - Biblioteca para gerenciamento e sincronização de
                dados com suporte a caching, background updates e query
                invalidation.
              </Link>
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.STYLIZATION}>
            <li>
              <Link href={`${pathUrl}/27`}>
                CSS-in-JS Styled-components: Biblioteca que permite escrever CSS
                dentro de arquivos JavaScript/TypeScript
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/28`}>
                Framework CSS TailwindCSS: Framework utilitário para estilização
                rápida e responsiva
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/26`}>
                CSS Modules: Estilização modular onde cada componente tem seu
                próprio arquivo CSS, evitando conflitos de nomes
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/30`}>
                SCSS/Sass: Pré-processador CSS que adiciona funcionalidades como
                variáveis e aninhamento
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/29`}>
                PostCSS: Ferramenta para transformar CSS com plugins, como
                autoprefixer e minificação
              </Link>
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.DEPLOY_BUILD}>
            <li>
              Entendimento de como fazer build e deploy de aplicações React com
              Nextjs
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.FRONT_BACK}>
            <li>
              Componentes Reutilizáveis: Modularidade e reutilização de
              componentes
            </li>
            <li>
              <Link href={`${pathUrl}/31`}>
                Divisão de Responsabilidades: Single Responsibility Principle
                (SRP)
              </Link>
            </li>
            <li>
              Testes: Escrevo testes End-2-End e unitários com Vitest, Cypress e
              Playwright
            </li>
            <li>
              Consistência de Código: Manter um padrão de codificação
              consistente através do uso de linters, formatação automática (como
              Prettier) e convenções de codificação.
            </li>
            <li>
              Acessibilidade: Garantir que os componentes e aplicações sejam
              acessíveis para todos os usuários.
            </li>
            <li>
              <Link href={`${pathUrl}/33`}>
                SOLID: Conjunto de princípios para design de software que
                promove a criação de sistemas modulares e de fácil manutenção.
                Inclui Princípio da Responsabilidade Única, Princípio da
                Abstração, e outros.
              </Link>
            </li>
            <li>
              <Link href={`${pathUrl}/32`}>
                DDD (Domain-Driven Design): Abordagem de design de software
                focada na modelagem do domínio de negócio e na criação de uma
                linguagem comum entre desenvolvedores e especialistas do
                domínio.
              </Link>
            </li>
            <li>
              Clean Architecture: Estrutura arquitetural que enfatiza a
              separação de preocupações e a independência de frameworks,
              permitindo que o código seja mais flexível e fácil de manter.
            </li>
            <li>
              Scrum: Metodologia ágil que utiliza sprints e reuniões diárias
              para promover a entrega incremental e contínua de software,
              facilitando a adaptação rápida às mudanças e a colaboração entre
              equipes.
            </li>
          </ul>

          <ul
            data-value={topic === topicsKnowledgeFrontEnd.JAVASCRIPT_TYPESCRIPT}
          >
            <li>
              JavaScript: Domínio da linguagem de programação essencial para
              desenvolvimento web, incluindo ES6+.
            </li>
            <li>
              TypeScript: Experiência com o superset de JavaScript que adiciona
              tipagem estática, melhorando a robustez e manutenção do código.
            </li>
            <li>
              Assíncrono: Utilização de Promises, Async/Await e técnicas de
              manipulação de código assíncrono.
            </li>

            <li>
              Padrões de Projeto: Aplicação de padrões de design em JavaScript
              para criar código modular e reutilizável.
            </li>
            <li>
              Manipulação do DOM: Uso eficiente de métodos para interagir e
              manipular o Document Object Model.
            </li>
            <li>
              Event Loop: Compreensão do funcionamento do loop de eventos no
              JavaScript, incluindo a execução de tarefas assíncronas.
            </li>
            <li>
              Hoisting: Conhecimento sobre elevação de variáveis e funções e seu
              impacto no código.
            </li>
            <li>
              Module System: Uso de módulos ES6 (import/export) para organizar e
              estruturar o código.
            </li>
            <li>
              Type Inference: Aproveitamento da inferência de tipos do
              TypeScript para reduzir a necessidade de anotações explícitas.
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.HTML}>
            <li>
              Estrutura Semântica: Uso de elementos semânticos como{' '}
              <strong>header</strong>, <strong>footer</strong>,{' '}
              <strong>article</strong>, e <strong>section</strong> para melhorar
              a acessibilidade e SEO.
            </li>
            <li>
              Formulários: Criação e validação de formulários utilizando
              elementos como <strong>input</strong>, <strong>select</strong>,{' '}
              <strong>textarea</strong>, e atributos de validação.
            </li>
            <li>
              Atributos Globais: Uso de atributos globais como{' '}
              <strong>class</strong>, <strong>id</strong>,{' '}
              <strong>data-*</strong> para identificar e manipular elementos.
            </li>
            <li>
              Tabelas: Estruturação de dados tabulares utilizando{' '}
              <strong>table</strong>, <strong>tr</strong>, <strong>td</strong>,{' '}
              <strong>th</strong>, e <strong>thead</strong>.
            </li>
            <li>
              Imagens e Mídia: Inclusão de imagens, vídeos e áudio usando{' '}
              <strong>img</strong>, <strong>video</strong>, e{' '}
              <strong>audio</strong> com as melhores práticas de acessibilidade.
            </li>
            <li>
              Links e Navegação: Criação de links e menus de navegação
              utilizando <strong>a</strong> e elementos de navegação.
            </li>
            <li>
              Meta Tags: Uso de meta tags para definir metadados, incluindo
              responsividade, SEO e informações de página.
            </li>
            <li>
              Layout Responsivo: Uso de media queries e técnicas de design
              responsivo para garantir que as páginas funcionem bem em todos os
              dispositivos.
            </li>
            <li>
              SEO: Aplicação de técnicas de SEO on-page para melhorar a
              visibilidade nos motores de busca.
            </li>
            <li>
              Integridade e Segurança: Uso de atributos como{' '}
              <strong>rel=&quot;noopener noreferrer&quot;</strong> e outras
              práticas para melhorar a segurança das aplicações web.
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.TOOLS_ECOSYSTEM}>
            <li>
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                Next.js: Framework para renderização do lado do servidor e
                geração de sites estáticos
              </a>
            </li>
            <li>Experiência com ferramentas como ESLint, Prettier.</li>
            <li>
              familiaridade com a metodologia ágil Scrum{' '}
              <a
                href="/scrum.docx"
                download="scrum.docx"
                aria-label="Baixar projeto scrum em DCOX"
              >
                Baixar portfólio SCRUM
              </a>
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.SVELTE_SVELTEKIT}>
            <li>
              <strong>Svelte 5:</strong> Framework reativo moderno com foco em
              performance e simplicidade, utilizando runes para gerenciamento de
              estado reativo.
            </li>
            <li>
              <strong>SvelteKit:</strong> Framework full-stack baseado em Svelte,
              com suporte a SSR (Server-Side Rendering), roteamento baseado em
              arquivos e APIs integradas.
            </li>
            <li>
              <strong>Svelte Runes:</strong> Sistema de runes ($state, $derived,
              $effect) para gerenciamento reativo de estado, substituindo o
              sistema de reatividade anterior.
            </li>
            <li>
              <strong>Server Load Functions:</strong> Experiência com funções de
              carregamento no servidor (+page.server.ts, +layout.server.ts) para
              buscar dados e realizar operações server-side.
            </li>
            <li>
              <strong>Form Actions:</strong> Implementação de ações de formulário
              server-side para processamento seguro de dados.
            </li>
            <li>
              <strong>Hooks Server:</strong> Trabalho com hooks.server.ts para
              interceptação de requisições, identificação de marketplace
              multi-tenant e injeção de contexto.
            </li>
            <li>
              <strong>Componentes Svelte:</strong> Desenvolvimento de componentes
              reutilizáveis com props tipadas, slots e eventos customizados.
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.TESTING}>
            <li>
              <strong>Playwright:</strong> Experiência profissional com testes
              end-to-end (E2E) em aplicações SvelteKit e Next.js, cobrindo
              fluxos críticos como checkout, autenticação e navegação.
            </li>
            <li>
              <strong>Testes E2E:</strong> Criação e manutenção de testes
              automatizados com ambiente isolado, garantindo confiabilidade das
              entregas em produção.
            </li>
            <li>
              <strong>Vitest:</strong> Framework de testes unitários para
              componentes e funções, com suporte a TypeScript e cobertura de
              código.
            </li>
            <li>
              <strong>MSW (Mock Service Worker):</strong> Uso de MSW para mockar
              requisições HTTP em testes, permitindo testes isolados e
              determinísticos.
            </li>
            <li>
              <strong>Testes de Integração:</strong> Experiência em testar
              integrações entre frontend e backend, validando fluxos completos
              de dados.
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeFrontEnd.MULTI_TENANT}>
            <li>
              <strong>Arquitetura Multi-Tenant:</strong> Experiência profissional
              trabalhando em plataforma de e-commerce multi-tenant, onde cada
              marketplace possui seu próprio domínio e configurações.
            </li>
            <li>
              <strong>Identificação por Domínio:</strong> Implementação de
              lógica para identificar marketplace através do hostname, injetando
              contexto em todas as requisições.
            </li>
            <li>
              <strong>Isolamento de Dados:</strong> Garantia de isolamento de
              dados entre diferentes tenants, sempre filtrando queries por
              marketplace_id.
            </li>
            <li>
              <strong>Configurações Dinâmicas:</strong> Trabalho com
              configurações específicas por tenant, como temas, logos e
              funcionalidades customizadas.
            </li>
            <li>
              <strong>Performance Multi-Tenant:</strong> Otimização de queries e
              cache considerando o contexto multi-tenant, garantindo performance
              mesmo com múltiplos marketplaces.
            </li>
          </ul>
        </section>
      </section>

      <section className="section_limiter flex items-center justify-end gap-2">
        <Link
          className="rounded-md p-1 no-underline duration-500 hover:scale-105"
          href={`${routes.developer}/${routes.backEnd}`}
        >
          Conhecimentos em Back-end
        </Link>
        <ArrowRight />
      </section>
    </main>
  )
}
