export default function FrontEnd() {
  return (
    <main className="px-4 py-28">
      <h1 className="style_title_1 online-block mx-auto w-5/6 text-center">
        Meus conhecimentos como programador Front-End
      </h1>

      <section className="section_limiter mt-28 flex flex-col gap-6">
        <div>
          <h2 className="mb-8 text-xl font-bold">React</h2>

          <div className="group cursor-pointer">
            <p className="font-bold">Componentes:</p>
            <ul className="hover_expand_list scrollbar">
              <li>Função e Classe: Explica os dois tipos de componentes.</li>
              <li>
                Propriedades (props): Passagem de dados de pai para filho.
              </li>
              <li>Ciclo de Vida: Métodos de ciclo de vida do componente.</li>
              <li>
                Renderização Condicional: Renderização de componentes baseada em
                condições.
              </li>
              <li>
                Composição vs. Herança: Composição combina componentes simples;
                herança usa classes base para estender funcionalidades.
              </li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <p className="font-bold">Hooks:</p>
            <ul className="hover_expand_list scrollbar scrollbar">
              <li>
                useState: Gerencia o estado interno de um componente funcional.
              </li>
              <li>
                useEffect: Executa efeitos colaterais após a renderização do
                componente.
              </li>
              <li>
                useContext: Acessa o valor de um contexto React sem precisar de
                `props`.
              </li>
              <li>
                Custom Hooks: Hooks personalizados para reutilizar lógica de
                componentes.
              </li>
              <li>
                useMemo: Memoriza valores calculados para evitar recomputações
                desnecessárias, melhorando a performance.
              </li>
              <li>
                useCallback: Memoriza funções para evitar re-criações
                desnecessárias.
              </li>
              <li>
                useRef: Permite a criação de referências mutáveis que persistem
                entre renderizações.
              </li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <p className="font-bold">Props & State:</p>
            <ul className="hover_expand_list scrollbar">
              <li>Props: Dados passados de pai para filho (imutáveis)</li>
              <li>
                State: Dados gerenciados internamente pelo componente (mutáveis)
              </li>
              <li>
                PropTypes: Validação de props para garantir que recebam tipos
                corretos
              </li>
              <li>
                Local vs. Global State: Estado local gerenciado dentro do
                componente vs. estado global gerenciado por bibliotecas como
                Redux
              </li>
              <li>
                Imutabilidade: Prática de não modificar diretamente os objetos
                de estado, mas criar novos
              </li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <p className="font-bold">Gerenciamento de Estado:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                React Context: Compartilhamento de estado entre componentes sem
                prop drilling
              </li>
              <li>Zustand: Biblioteca de estado leve e sem boilerplate</li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <p className="font-bold">React Router:</p>
            <ul className="hover_expand_list scrollbar">
              <li>Navegação e roteamento em aplicações React</li>
              <li>Criação de rotas dinâmicas e aninhadas</li>
              <li>
                Rotas protegidas: Implementação de proteção de rotas baseada em
                autenticação
              </li>
              <li>
                Programmatic navigation: Navegação programática usando
                `navigate` ou `history`
              </li>
              <li>Parâmetros de URL: Extração e uso de parâmetros da URL</li>
              <li>
                Lazy loading de rotas: Carregamento sob demanda de componentes
                de rota para otimizar o desempenho
              </li>
              <li>
                Contexto de roteamento: Utilização do contexto do roteador para
                acessar informações de roteamento em qualquer componente
              </li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <p className="font-bold">Formulários:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Gerenciamento de formulários: Controle do estado e lógica dos
                formulários
              </li>
              <li>
                Zod para validação: Biblioteca para validação de esquemas e
                tipos de dados
              </li>
              <li>
                React Hook Form: Biblioteca para gerenciamento e validação de
                formulários com performance otimizada
              </li>
              <li>
                Controle de erros: Estratégias para exibir mensagens de erro e
                feedback ao usuário
              </li>
              <li>
                Formulários dinâmicos: Criação de formulários que se adaptam com
                base em dados ou interação do usuário
              </li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <p className="font-bold">Ferramentas e Ecossistema:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Next.js: Framework para renderização do lado do servidor e
                geração de sites estáticos
              </li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <p className="font-bold">Integração com APIs:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Fetch API: Interface nativa do navegador para fazer requisições
                HTTP de forma simples e direta.
              </li>
              <li>
                Axios: Biblioteca popular para fazer requisições HTTP, com
                suporte a interceptadores e configuração fácil.
              </li>
              <li>
                React Query: Biblioteca para gerenciamento e sincronização de
                dados com suporte a caching, background updates e query
                invalidation.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-xl font-bold">Linguagem de estilo (CSS)</h2>

          <div className="group cursor-pointer">
            <p className="font-bold">Estilização:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                CSS-in-JS Styled-components: Biblioteca que permite escrever CSS
                dentro de arquivos JavaScript/TypeScript
              </li>
              <li>
                Framework CSS TailwindCSS: Framework utilitário para estilização
                rápida e responsiva
              </li>
              <li>
                CSS Modules: Estilização modular onde cada componente tem seu
                próprio arquivo CSS, evitando conflitos de nomes
              </li>
              <li>
                SCSS/Sass: Pré-processador CSS que adiciona funcionalidades como
                variáveis e aninhamento
              </li>
              <li>
                PostCSS: Ferramenta para transformar CSS com plugins, como
                autoprefixer e minificação
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-xl font-bold">Produção</h2>

          <div className="group cursor-pointer">
            <p className="font-bold">Deploy e Build:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Entendimento de como fazer build e deploy de aplicações React
              </li>
              <li>Ferramentas como Vercel e Netlify</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-xl font-bold">
            Boas práticas de programação
          </h2>

          <div className="group cursor-pointer">
            <p className="font-bold">Boas Práticas:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Componentes Reutilizáveis: Modularidade e reutilização de
                componentes
              </li>
              <li>
                Divisão de Responsabilidades: Single Responsibility Principle
                (SRP)
              </li>
              <li>
                Testes: Escrevo testes End-2-End e unitários com Vitest, Cypress
                e Playwright
              </li>
              <li>
                Consistência de Código: Manter um padrão de codificação
                consistente através do uso de linters, formatação automática
                (como Prettier) e convenções de codificação.
              </li>
              <li>
                Acessibilidade: Garantir que os componentes e aplicações sejam
                acessíveis para todos os usuários, incluindo aqueles com
                deficiências, através do uso de práticas como ARIA roles e
                propriedades.
              </li>
              <li>
                SOLID: Conjunto de princípios para design de software que
                promove a criação de sistemas modulares e de fácil manutenção.
                Inclui Princípio da Responsabilidade Única, Princípio da
                Abstração, e outros.
              </li>
              <li>
                DDD (Domain-Driven Design): Abordagem de design de software
                focada na modelagem do domínio de negócio e na criação de uma
                linguagem comum entre desenvolvedores e especialistas do
                domínio.
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
          </div>
        </div>
      </section>
    </main>
  )
}
