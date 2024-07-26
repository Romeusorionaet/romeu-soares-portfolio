import Link from 'next/link'

export function TopicsNavigation() {
  return (
    <section className="mb-4 mt-16 flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">Saber mais sobre:</h2>

      <nav className="flex items-center justify-center gap-4 text-foreground">
        <Link
          className="rounded-md bg-dark-1/50 p-1 no-underline duration-500 hover:scale-105 hover:bg-dark-1 focus:bg-dark-1"
          href={'/developer/front-end'}
        >
          Front-End
        </Link>
        <Link
          className="rounded-md bg-dark-1/50 p-1 no-underline duration-500 hover:scale-105 hover:bg-dark-1 focus:bg-dark-1"
          href={'/developer/back-end'}
        >
          Back-End
        </Link>
      </nav>

      <a
        href="/romeu-soares-programador-front-end.pdf"
        download="Curriculo.pdf"
        aria-label="Baixar Currículo em PDF"
      >
        Baixar Currículo
      </a>
    </section>
  )
}
