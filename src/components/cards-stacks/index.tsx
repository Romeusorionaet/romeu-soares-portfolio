'use client'

import nodejs from '@/assets/img/stacks/back-end/nodejsLogo.png'
import drizzle from '@/assets/img/stacks/back-end/drizzleLogo.png'
import prisma from '@/assets/img/stacks/back-end/prismaLogo.png'
import postgresql from '@/assets/img/stacks/back-end/postgresqlLogo.png'
import mysql from '@/assets/img/stacks/back-end/mysqlLogo.png'
import express from '@/assets/img/stacks/back-end/expressjsLogo.png'
import fastify from '@/assets/img/stacks/back-end/fastifyLogo.png'
import git from '@/assets/img/stacks/back-end/gitLogo.png'
import react from '../../assets/img/stacks/front-end/reactLogo.png'
import typescript from '../../assets/img/stacks/front-end/typeScriptLogo.svg'
import javascript from '../../assets/img/stacks/front-end/javascriptLogo.png'
import html from '../../assets/img/stacks/front-end/htmlLogo.png'
import css from '../../assets/img/stacks/front-end/cssLogo.png'
import tailwindcss from '../../assets/img/stacks/front-end/tailwindcssLogo.png'
import nextjs from '../../assets/img/stacks/front-end/nextjs.png'
import { Tilt } from 'react-tilt'
import Image from 'next/image'

export function CardsStacks() {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 2000,
    scale: 1.1,
    speed: 2000,
    transition: true,
    axis: null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  }

  const stacks = [
    {
      id: 12345,
      link: 'https://react.dev/',
      file: react,
    },
    {
      id: 24565,
      link: 'https://www.typescriptlang.org/',
      file: typescript,
    },
    {
      id: 34535,
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
      file: javascript,
    },
    {
      id: 44324,
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
      file: html,
    },
    {
      id: 76897,
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
      file: css,
    },
    {
      id: 123235,
      link: 'https://tailwindcss.com/',
      file: tailwindcss,
    },
    {
      id: 235453,
      link: 'https://nextjs.org/',
      file: nextjs,
    },
    {
      id: 8,
      link: 'https://nodejs.org/pt',
      file: nodejs,
    },
    {
      id: 9,
      link: 'https://www.postgresql.org/',
      file: postgresql,
    },
    {
      id: 10,
      link: 'https://www.mysql.com/',
      file: mysql,
    },
    {
      id: 15,
      link: 'https://orm.drizzle.team/',
      file: drizzle,
    },
    {
      id: 11,
      link: 'https://www.prisma.io/?via=start&msclkid=4c00e92dcd7916b2dd018ee992ccd7b0',
      file: prisma,
    },
    {
      id: 12,
      link: 'https://expressjs.com/',
      file: express,
    },
    {
      id: 13,
      link: 'https://fastify.dev/',
      file: fastify,
    },

    {
      id: 14,
      link: 'https://git-scm.com/',
      file: git,
    },
  ]

  return (
    <div className="mx-auto flex w-full max-w-[800px] flex-wrap items-center justify-center gap-4">
      {stacks.map((item) => {
        return (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="relative flex justify-start"
          >
            <Tilt options={defaultOptions}>
              <Image
                width={36}
                height={36}
                sizes="100vw"
                src={item.file}
                alt={item.file}
                className="h-10 w-16 rounded-md md:h-14 md:w-24"
              />
            </Tilt>
          </a>
        )
      })}
    </div>
  )
}
