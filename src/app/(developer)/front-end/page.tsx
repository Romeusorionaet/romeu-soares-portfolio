export default function FrontEnd() {
  return (
    <main className="px-4 py-28">
      <h1 className="text-center font-bold max-lg:text-7xl max-md:text-5xl lg:text-8xl">
        Meus conhecimentos como programador Front-End
      </h1>

      <section className="section_limiter mt-28 flex flex-col gap-4">
        <h2 className="mb-8 text-xl font-bold">
          Amplo conhecimento em React. Domínio avançado.
        </h2>

        <p>
          <strong>Componentes:</strong>
          <br />
          - Função e Classe
          <br />
          - Propriedades (props)
          <br />
          - Estado (state)
          <br />- Ciclo de Vida
        </p>
        <p>
          <strong>Hooks:</strong>
          <br />
          - useState
          <br />
          - useEffect
          <br />
          - useContext
          <br />- Custom Hooks
        </p>
        <p>
          <strong>Props & State:</strong>
          <br />
          - Props: Dados passados de pai para filho (imutáveis)
          <br />- State: Dados gerenciados internamente pelo componente
          (mutáveis)
        </p>
        <p>
          <strong>Gerenciamento de Estado:</strong>
          <br />
          - React Context
          <br />- Bibliotecas de Estado: Zustand e Redux
        </p>
        <p>
          <strong>React Router:</strong>
          <br />
          - Navegação e roteamento em aplicações React
          <br />- Criação de rotas dinâmicas e aninhadas
        </p>
        <p>
          <strong>Formulários:</strong>
          <br />
          - Gerenciamento de formulários
          <br />- Zod para validação
        </p>
        <p>
          <strong>Estilização:</strong>
          <br />
          - CSS-in-JS Styled-components
          <br />- Framework CSS TailwindCSS
        </p>
        <p>
          <strong>Boas Práticas:</strong>
          <br />
          - Componentes Reutilizáveis: Modularidade e reutilização de
          componentes
          <br />
          - Divisão de Responsabilidades: Single Responsibility Principle (SRP)
          <br />- Testes: Escrevo testes End-2-End e unitários com Vitest e
          Cypress
        </p>
        <p>
          <strong>Ferramentas e Ecossistema:</strong>
          <br />- Next.js: Framework para renderização do lado do servidor e
          geração de sites estáticos
        </p>
        <p>
          <strong>Integração com APIs:</strong>
          <br />- Fetch API e Axios para fazer requisições HTTP
        </p>
        <p>
          <strong>Performance:</strong>
          <br />
          - Memoização com React.memo, useMemo, e useCallback
          <br />- Code splitting e lazy loading com React.lazy e Suspense
        </p>
        <p>
          <strong>Deploy e Build:</strong>
          <br />
          - Entendimento de como fazer build e deploy de aplicações React
          <br />- Ferramentas como Vercel e Netlify
        </p>
      </section>
    </main>
  )
}
