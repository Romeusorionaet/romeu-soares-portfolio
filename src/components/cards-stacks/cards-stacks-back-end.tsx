import nodejs from '../../assets/img/stacks/back-end/nodejsLogo.svg'
import prisma from '../../assets/img/stacks/back-end/prismaLogo.svg'
import postgresql from '../../assets/img/stacks/back-end/postgresqlLogo.png'
import mysql from '../../assets/img/stacks/back-end/mysqlLogo.png'
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
  ]

  return <CardStack stacks={stacks} />
}
