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
              <strong>Testes Unitários:</strong> Experiência profissional com
              Vitest para testar funções, serviços e lógica de negócio de forma
              isolada.
            </li>
            <li>
              <strong>Testes End-to-End (E2E):</strong> Criação e manutenção de
              testes E2E com Playwright, cobrindo fluxos críticos como checkout,
              autenticação e integrações em ambiente isolado.
            </li>
            <li>
              <strong>Supertest:</strong> Utilizado para testar endpoints HTTP,
              validando rotas, middlewares e respostas da API.
            </li>
            <li>
              <strong>Testes de Integração:</strong> Experiência em testar
              integrações entre serviços, validando fluxos completos de dados e
              comunicação entre sistemas.
            </li>
            <li>
              <strong>Cobertura de Testes:</strong> Foco em aumentar a
              confiabilidade das entregas através de testes automatizados,
              especialmente em fluxos críticos de produto.
            </li>
            <li>
              <strong>Ambiente Isolado:</strong> Configuração de ambientes de
              teste isolados, garantindo que testes não interfiram entre si ou
              com produção.
            </li>
          </ul>

          <ul
            data-value={
              topic === topicsKnowledgeBackEnd.FRAMEWORKS_AND_CONCEPTS
            }
          >
            <li>
              <strong>Fastify:</strong> Experiência profissional desenvolvendo
              APIs RESTful com Fastify, aproveitando sua performance superior e
              sistema de plugins extensível.
            </li>
            <li>
              <strong>Express:</strong> Conhecimento em Express.js para
              desenvolvimento de APIs RESTful e integração com serviços externos.
            </li>
            <li>
              <strong>ElysiaJS:</strong> Experiência com framework moderno baseado
              em Bun, focado em performance e TypeScript-first.
            </li>
            <li>
              <strong>SOLID:</strong> Aplicação prática dos princípios de design
              para criar código sustentável e flexível em projetos profissionais.
            </li>
            <li>
              <strong>Clean Architecture:</strong> Estrutura para separar as
              responsabilidades e manter o código organizado, aplicada em
              projetos de produção.
            </li>
            <li>
              <strong>DDD (Domain-Driven Design):</strong> Abordagem para modelar
              complexidade de domínios, especialmente em sistemas multi-tenant.
            </li>
            <li>
              <strong>Padrões de Design:</strong> Familiaridade com Factory
              Pattern, Repository Pattern e outros padrões para criar código
              eficiente e manutenível.
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
              desenvolvimento e básico de dockerização.
            </li>
             <li>
              Projeto dockerizado <a href="https://github.com/Romeusorionaet/Mini-Marketplace" target="_blank">Mini Marketplace</a>
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeBackEnd.CACHING}>
            <li>Redis: Uso para melhorar a performance de leitura de dados.</li>
          </ul>

          <ul data-value={topic === topicsKnowledgeBackEnd.DATABASE_ORM}>
            <li>
              <strong>PostgreSQL:</strong> Experiência profissional com banco de
              dados relacional poderoso e confiável em ambiente de produção.
            </li>
            <li>
              <strong>MySQL:</strong> Conhecimento em banco de dados relacional
              amplamente utilizado, trabalhando com schemas complexos e queries
              otimizadas.
            </li>
            <li>
              <strong>Drizzle ORM:</strong> Experiência profissional utilizando
              Drizzle como ORM principal, com type-safety completo, migrations
              automatizadas e queries tipadas. Trabalho com schemas modulares e
              relações bem definidas.
            </li>
            <li>
              <strong>Prisma:</strong> Conhecimento em ORM para Node.js que
              facilita a interação com bancos de dados relacionais, com suporte a
              migrations e type-safety.
            </li>
            <li>
              <strong>Queries Otimizadas:</strong> Experiência em otimização de
              queries complexas, uso de índices e análise de performance em
              ambiente multi-tenant.
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
              <strong>Git:</strong> Sistema de controle de versão para
              gerenciamento de código-fonte, com experiência em workflows
              colaborativos, code review e resolução de conflitos.
            </li>
            <li>
              <strong>GitHub:</strong> Trabalho com pull requests, issues e
              gerenciamento de projetos em equipe.
            </li>
          </ul>

          <ul
            data-value={
              topic === topicsKnowledgeBackEnd.WEBHOOKS_INTEGRATIONS
            }
          >
            <li>
              <strong>Webhooks:</strong> Experiência profissional implementando
              e consumindo webhooks para integração com marketplaces externos
              (Tray, Loja Integrada, Nuvemshop) e serviços de terceiros.
            </li>
            <li>
              <strong>Callbacks Assíncronos:</strong> Trabalho com processamento
              assíncrono de callbacks, garantindo confiabilidade e retry em caso
              de falhas.
            </li>
            <li>
              <strong>Integrações com Marketplaces:</strong> Desenvolvimento de
              integrações completas com plataformas de e-commerce, incluindo
              sincronização de produtos, pedidos e estoque.
            </li>
            <li>
              <strong>Antifraude B2e:</strong> Integração com serviços de
              antifraude para validação de transações e análise de risco.
            </li>
            <li>
              <strong>Serviços de Frete:</strong> Integração com APIs de cálculo
              de frete (Frenet), incluindo tratamento de erros e fallbacks.
            </li>
            <li>
              <strong>APIs RESTful:</strong> Desenvolvimento e consumo de APIs
              RESTful, seguindo boas práticas de design e documentação.
            </li>
            <li>
              <strong>Tratamento de Erros:</strong> Implementação robusta de
              tratamento de erros em integrações, com logging adequado e
              notificações.
            </li>
          </ul>

          <ul
            data-value={topic === topicsKnowledgeBackEnd.SEARCH_ENGINES}
          >
            <li>
              <strong>OpenSearch:</strong> Experiência profissional trabalhando
              com OpenSearch para indexação e busca de produtos em plataforma de
              e-commerce, garantindo performance e relevância nas buscas.
            </li>
            <li>
              <strong>Indexação de Dados:</strong> Implementação de processos de
              indexação de produtos, mantendo sincronização entre banco de dados
              relacional e OpenSearch.
            </li>
            <li>
              <strong>Busca Avançada:</strong> Desenvolvimento de queries
              complexas no OpenSearch, incluindo filtros, agregações e ordenação
              por relevância.
            </li>
            <li>
              <strong>Consistência de Dados:</strong> Garantia de consistência
              entre listagens de produtos e detalhes, sincronizando dados entre
              MySQL e OpenSearch.
            </li>
            <li>
              <strong>Fallback para MySQL:</strong> Implementação de estratégia
              de fallback para busca em MySQL quando OpenSearch não está
              disponível.
            </li>
            <li>
              <strong>Performance de Busca:</strong> Otimização de queries de
              busca para garantir resposta rápida mesmo com grandes volumes de
              dados.
            </li>
          </ul>

          <ul data-value={topic === topicsKnowledgeBackEnd.MULTI_TENANT}>
            <li>
              <strong>Arquitetura Multi-Tenant:</strong> Experiência profissional
              trabalhando em plataforma de e-commerce multi-tenant, onde cada
              marketplace possui isolamento completo de dados e configurações.
            </li>
            <li>
              <strong>Filtragem por Marketplace:</strong> Sempre filtrar queries
              por marketplace_id, garantindo isolamento de dados entre
              diferentes tenants.
            </li>
            <li>
              <strong>Identificação de Tenant:</strong> Implementação de lógica
              para identificar marketplace através de domínio ou contexto,
              injetando marketplace_id em todas as operações.
            </li>
            <li>
              <strong>Schemas Multi-Tenant:</strong> Trabalho com schemas de
              banco de dados que suportam multi-tenancy, sempre incluindo
              marketplace_id nas tabelas críticas.
            </li>
            <li>
              <strong>Cache Multi-Tenant:</strong> Implementação de estratégias
              de cache considerando o contexto multi-tenant, evitando vazamento de
              dados entre marketplaces.
            </li>
            <li>
              <strong>Performance Multi-Tenant:</strong> Otimização de queries e
              índices considerando o contexto multi-tenant, garantindo performance
              mesmo com múltiplos marketplaces simultâneos.
            </li>
            <li>
              <strong>Migrações Multi-Tenant:</strong> Experiência em criar e
              executar migrations que respeitam o isolamento multi-tenant,
              aplicando mudanças de forma segura.
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
