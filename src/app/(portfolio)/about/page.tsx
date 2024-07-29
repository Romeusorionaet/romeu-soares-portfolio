import Image from 'next/image'
import profile from '@/assets/img/avatar/romeu-profile.png'
import { MovingBackgroundBalls } from '@/components/moving-card/moving-background-balls'
import { TopicsNavigation } from '@/components/topics-navigation'

export default function About() {
  return (
    <main className="relative space-y-8 overflow-hidden px-4 pb-28 pt-40">
      {Array.from({ length: 10 }).map((_, index) => (
        <MovingBackgroundBalls key={index} />
      ))}

      <section className="section_limiter space-y-8">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <h1 className="style_title_1">Minha Jornada</h1>
          <Image
            width={36}
            height={36}
            sizes="100vw"
            className="h-60 w-52 object-contain"
            src={profile}
            alt=""
          />
        </div>

        <div className="mx-auto space-y-4 lg:w-1/2">
          <p>
            Meu nome é <strong>Romeu Soares</strong>, tenho 25 anos e sou
            <strong> Programador Web</strong>. Estou sempre em busca de novas
            oportunidades para aprender e crescer nesta área.
          </p>
          <p>
            Ao longo da minha jornada, adquiri conhecimentos sólidos e
            atualizados nas principais ferramentas do mercado. Iniciei minha
            trajetória com um curso de <strong>Web Design Moderno</strong>, onde
            aprendi os conceitos básicos de <i>HTML, CSS e JavaScript.</i> Em
            seguida, participei de vários programas da renomada empresa de
            educação em tecnologia,{' '}
            <a href="https://www.rocketseat.com.br/">Rocketseat</a>. Através
            deste programa, pude definir meus objetivos e traçar minha
            trajetória de forma estruturada.
          </p>
          <p>
            Durante o programa, aprofundei meus conhecimentos nos conceitos
            fundamentais e fui capaz de realizar projetos mais complexos.
            Adquiri habilidades em montar e consumir{' '}
            <strong>APIs RESTful</strong>, além de trabalhar com bancos de dados
            PostgreSQL e MySQL.
          </p>
          <p>
            Tive também a oportunidade de simular cenários reais de mercado,
            encontrando soluções eficientes e aprendendo a utilizar ferramentas
            atualizadas, como <i>TypeScript, Next.js e Tailwindcss. </i>
          </p>
          <p>
            Atualmente estou cursando faculdade de{' '}
            <strong>Análise e desenvolvimento de sistemas</strong>, avançando
            ainda mais meus conhecimentos.
          </p>
          <p>
            Se você procura um <strong>Programador Frontend</strong> apaixonado,
            dedicado e sempre disposto a aprender, estou pronto para contribuir
            com seu projeto e fazer a diferença.
          </p>
        </div>
      </section>

      <section className="section_limiter space-y-8">
        <h2 className="text-lg md:text-xl">Meus certificados</h2>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href="https://app.rocketseat.com.br/certificates/84022f25-54c7-4c79-aff3-6326b6978d29"
            target="_blank"
            rel="noreferrer"
          >
            Certificado do programa Explorer/FullStack
          </a>

          <a
            href="https://app.rocketseat.com.br/certificates/01c2d0aa-f1a9-48a9-b8d8-69b8f9dc0ecf"
            target="_blank"
            rel="noreferrer"
          >
            Certificado do programa Ignite módulo Reactjs/Frontend
          </a>

          <a
            href="https://app.rocketseat.com.br/certificates/a4121039-15c1-43e3-b352-b4336b3616da"
            target="_blank"
            rel="noreferrer"
          >
            Certificado do programa Ignite módulo Nodejs/Backend
          </a>

          <a
            href="https://app.rocketseat.com.br/certificates/e51fbba1-7aa7-4c15-b9ce-2da3d76f0e15"
            target="_blank"
            rel="noreferrer"
          >
            Micro Certificado - Fundamentos do React
          </a>

          <a
            href="https://app.rocketseat.com.br/certificates/b31bc9f0-c44a-4305-92bd-4dff6db9263c"
            target="_blank"
            rel="noreferrer"
          >
            Micro Certificado - HTTP Performance
          </a>

          <a
            href="https://app.rocketseat.com.br/certificates/b4d48bf5-6cdf-4e78-b806-aaf0cee3b83b"
            target="_blank"
            rel="noreferrer"
          >
            Micro Certificado - Fundamentos de Nodejs
          </a>

          <a
            href="https://app.rocketseat.com.br/certificates/700d8c77-52ea-4171-8f51-4a94b4d677ff"
            target="_blank"
            rel="noreferrer"
          >
            Micro Certificado - DDD Clean Architecture
          </a>

          <a
            href="https://app.rocketseat.com.br/certificates/a45fffeb-34f3-4b67-9a05-0010b8a1046d"
            target="_blank"
            rel="noreferrer"
          >
            Micro Certificado curso - Next.js App Router e Testes
          </a>

          <a
            href="https://app.rocketseat.com.br/certificates/f6b62499-2e30-45dd-a521-27a07141b54e"
            target="_blank"
            rel="noreferrer"
          >
            Micro Certificado curso - Redux + Zustand
          </a>

          <a
            href="https://app.rocketseat.com.br/certificates/fa660f97-98ca-4eed-87c1-dd5610e5f514"
            target="_blank"
            rel="noreferrer"
          >
            Micro Certificado curso - Masterizando o Tailwind
          </a>

          <a
            href="https://app.rocketseat.com.br/certificates/1148748a-5624-419b-bb6b-64cbd319efcf"
            target="_blank"
            rel="noreferrer"
          >
            Micro Certificado evento - NLW Unite - Reactjs
          </a>

          <a
            href="https://app.rocketseat.com.br/certificates/234fcb56-b098-4025-bb0e-bd8da9ec47cf"
            target="_blank"
            rel="noreferrer"
          >
            Micro Certificado evento - AI for Devs
          </a>

          <a
            href="https://app.rocketseat.com.br/certificates/801c048b-69bc-4afa-916c-ee0a9e344617"
            target="_blank"
            rel="noreferrer"
          >
            Micro Certificado evento - NLW IA
          </a>

          <a
            href="https://app.rocketseat.com.br/certificates/baf813ef-3d39-4b18-a678-d8fb4de54472"
            target="_blank"
            rel="noreferrer"
          >
            Micro Certificado evento - NLW Expert trilha de React
          </a>
        </div>
      </section>

      <TopicsNavigation />
    </main>
  )
}
