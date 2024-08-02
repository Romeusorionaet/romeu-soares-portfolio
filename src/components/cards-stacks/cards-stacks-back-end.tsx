import nodejs from '@/assets/img/stacks/back-end/nodejsLogo.svg'
import prisma from '@/assets/img/stacks/back-end/prismaLogo.svg'
import postgresql from '@/assets/img/stacks/back-end/postgresqlLogo.png'
import mysql from '@/assets/img/stacks/back-end/mysqlLogo.png'
import express from '@/assets/img/stacks/back-end/expressLogo.png'
import fastify from '@/assets/img/stacks/back-end/fastifyLogo.png'
import git from '@/assets/img/stacks/back-end/gitLogo.png'
import { CardStack } from './card-stack'

export function CardsStacksBackEnd() {
  const stacks = [
    {
      id: 8,
      link: 'https://nodejs.org/pt',
      description:
        'Node.js® é uma ambiente de execução de JavaScript disponível para várias plataformas, de código aberto e gratuita, que permite os programadores criar servidores...ler mais',
      file: nodejs,
    },
    {
      id: 9,
      link: 'https://www.postgresql.org/',
      description:
        'O PostgreSQL é um poderoso sistema de banco de dados objeto-relacional de código aberto com mais de 35 anos de desenvolvimento ativo que lhe rendeu uma forte reputação...ler mais',
      file: postgresql,
    },
    {
      id: 10,
      link: 'https://www.mysql.com/',
      description:
        'O MySQL é um popular sistema de gerenciamento de banco de dados relacional de código aberto, amplamente utilizado para aplicações web...ler mais',
      file: mysql,
    },
    {
      id: 11,
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
      description:
        'O Prisma proporciona a melhor experiência para sua equipe trabalhar e interagir com bancos de dados. Até mesmo coisas complexas, como pool de conexões, cache...ler mais',
      file: prisma,
    },
    {
      id: 12,
      link: 'https://expressjs.com/',
      description:
        'Express é uma estrutura de aplicação web Node.js mínima e flexível que fornece um conjunto robusto de recursos para aplicativos web e móveis...ler mais',
      file: express,
    },
    {
      id: 13,
      link: 'https://fastify.dev/',
      description:
        'Fastify é um framework web altamente focado em fornecer a melhor experiência de desenvolvedor com o mínimo de sobrecarga e uma poderosa arquitetura de plugins...ler mais',
      file: fastify,
    },

    {
      id: 14,
      link: 'https://git-scm.com/',
      description:
        'O Git é um sistema de controle de versão distribuído gratuito e de código aberto projetado para lidar com tudo, desde projetos pequenos a muito grandes, com velocidade e eficiência...ler mais',
      file: git,
    },
  ]

  return <CardStack stacks={stacks} />
}
