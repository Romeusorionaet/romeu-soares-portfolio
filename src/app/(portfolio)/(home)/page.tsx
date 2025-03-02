import { CardsStacks } from '@/components/cards-stacks'

export default function Home() {
  return (
    <main className="overflow-hidden pt-56">
      <div className="fixed -bottom-10 -right-20 h-56 w-[500px] rounded-full bg-violet-200 opacity-50 blur-3xl" />
      <div className="fixed -right-20 bottom-10 h-[500px] w-96 rounded-full bg-cyan-500 opacity-40 blur-3xl" />
      <div className="fixed bottom-4 right-4 z-20 h-56 w-56 bg-[url(/backgrounds/programming.png)] bg-cover bg-no-repeat max-md:hidden" />
      <section className="section_limiter flex flex-col gap-10 px-4">
        <div className="mx-auto space-y-4 rounded-md p-2 duration-500 md:w-1/2">
          <h1 className="style_title_1 whitespace-nowrap mix-blend-exclusion">
            Programador Web
          </h1>

          <p className="mix-blend-exclusion max-md:text-sm">
            Me chamo Romeu e sou Programador Web. A sua visita aqui é sempre
            bem-vinda! Preparei esta página para compartilhar todos os meus
            conhecimentos em Programação Web, apresentarei tudo de maneira
            descontraída e agradável. Aproveite para explorar!
          </p>
        </div>

        <CardsStacks />

        <a
          href="/romeu-soares-programador-front-end.PDF"
          download="Curriculo.pdf"
          aria-label="Baixar Currículo em PDF"
          className="w-56 animate-pulse rounded-md bg-white p-1 text-center text-black hover:animate-none max-md:mx-auto md:p-4"
        >
          Download CV
        </a>
      </section>
    </main>
  )
}
