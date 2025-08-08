import { CardsStacks } from '@/components/cards-stacks'
import { ArrowDown } from 'lucide-react'
import { CardProject } from '../my-projects/components/card-project'
import { Ribbon } from '@/components/ribbon'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden pb-10 pt-56">
      <div className="fixed -bottom-10 -right-20 -z-10 h-56 w-[500px] rounded-full bg-violet-200 opacity-50 blur-3xl" />
      <div className="fixed -right-20 bottom-10 -z-10 h-[500px] w-96 rounded-full bg-cyan-500 opacity-40 blur-3xl" />
      <div className="fixed bottom-4 right-4 -z-20 h-56 w-56 bg-[url(/backgrounds/programming.png)] bg-cover bg-no-repeat max-md:hidden" />
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

          <p className="mix-blend-exclusion max-md:text-sm">
            Atualmente, estou disponível para oportunidades de trabalho no
            modelo CLT e também para projetos como freelancer. Se você ou sua
            empresa está em busca de um desenvolvedor comprometido e apaixonado
            por tecnologia, entre em contato — será um prazer colaborar!
          </p>
        </div>

        <CardsStacks />

        <div className="mx-auto flex w-full max-w-[50%] items-center justify-between gap-40">
          <a
            href="/romeu-soares-programador-front-end.PDF"
            download="Curriculo.pdf"
            aria-label="Baixar Currículo em PDF"
            className="w-56 animate-pulse rounded-md bg-white p-1 text-center text-black hover:animate-none max-md:mx-auto md:p-4"
          >
            Download CV
          </a>

          <ArrowDown className="animate-bounce" size={38} />
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="style_title_1 whitespace-nowrap mix-blend-exclusion">
          Projetos pessoais
        </h2>

        <div className="mt-20 flex flex-wrap justify-center gap-40 p-4">
          <p className="rounded-md border-l-4 border-yellow-400 bg-yellow-100/80 p-3 text-yellow-800 lg:w-1/2">
            <strong>Nota:</strong> A API dos projetos a seguir estão hospedadas
            na plataforma Render (plano gratuito), o que significa que elas
            podem hibernar quando ficarem inativas. Nesse caso, o primeiro
            acesso após a hibernação pode demorar alguns minutos.
          </p>

          <section className="flex w-full gap-4 max-md:flex-col">
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:w-2/5">
              <Ribbon text="Em Desenvolvimento">
                <CardProject
                  pageURL="https://nossa-cidade-web.vercel.app"
                  previewDesktop="https://firebasestorage.googleapis.com/v0/b/my-projects-for-portfolio.appspot.com/o/preview-desktop-nossa-cidade.png?alt=media&token=3fcb1f6a-56f3-466a-b402-2ba23480104f"
                  previewMobile="https://firebasestorage.googleapis.com/v0/b/my-projects-for-portfolio.appspot.com/o/preview-mobile-nossa-cidade.png?alt=media&token=8e7e63a1-ca44-4aba-83f1-fe601ddc2f6f"
                  title="Nossa Cidade"
                />
              </Ribbon>

              <h3>
                <a
                  href="https://nossa-cidade-web.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Acesse - Nossa Cidade
                </a>
              </h3>

              <p className="text-start text-sm">
                A Nossa Cidade foi pensando para ser uma plataforma digital que
                fornece informações úteis sobre cada ponto comercial da cidade
                mapeada, oferecendo diversos recursos para conectar clientes e
                comerciantes.
              </p>

              <p className="text-start text-sm">
                Muitas vezes, quando precisamos comprar algo, acabamos
                recorrendo direto aos apps de compras online — pela praticidade
                e rapidez. Mas e se o que você procura estiver disponível na sua
                própria cidade, por um preço justo e pronto para levar na hora?
                Será que vale mesmo a pena esperar dias por algo que poderia
                estar logo ali, do lado?
              </p>

              <p className="text-start text-sm">
                A Nossa Cidade é uma plataforma focada no comércio local,
                impulsionando as vendas da sua região e conectando comerciantes
                aos clientes próximos.
              </p>
            </div>
            <div className="flex h-full w-full flex-col justify-center space-y-4 rounded-xl shadow-md md:w-1/2">
              <h2 className="mb-4 text-lg font-bold md:text-xl">
                O que já desenvolvi na plataforma Nossa Cidade
              </h2>
              <ul className="style-list-description-project space-y-3 rounded-md bg-white/60 p-1 text-gray-700 duration-300 hover:bg-white md:text-base">
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    API construída em <strong>NestJS</strong>, organizada em
                    camadas (<em>core, domain, infra, http, entities...</em>),
                    seguindo boas práticas de arquitetura inspiradas em{' '}
                    <strong>DDD</strong> e <strong>SOLID</strong>.
                    <br />
                    <a
                      href="https://github.com/Romeusorionaet/Nossa-Cidade-API"
                      target="_blank"
                      className="text-purple-600 underline"
                      rel="noreferrer"
                    >
                      Repositório no GitHub
                    </a>
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Banco de dados <strong>PostgreSQL</strong> integrado via{' '}
                    <strong>Drizzle Kit</strong>, com schema modular e{' '}
                    <strong>31 tabelas</strong> bem organizadas.{' '}
                    <a
                      href="/pdf/dbdiagram.pdf"
                      target="_blank"
                      className="text-purple-600 underline"
                    >
                      Baixar Estrura do banco de dados PDF
                    </a>
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Sistema de autenticação seguro com{' '}
                    <strong>hash de senhas</strong> e tokens{' '}
                    <strong>JWT RS256</strong> — assinatura assimétrica que
                    aumenta a segurança, já que a chave privada nunca é exposta.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Upload de imagens usando o serviço{' '}
                    <a
                      href="https://docs.uploadthing.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-600 underline"
                    >
                      UploadThing
                    </a>
                    .
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Sistema de e-mails utilizando <strong>Nodemailer</strong>{' '}
                    para notificações, recuperação e redefinição de senha.
                  </span>
                </li>
              </ul>

              <h2 className="mb-4 text-lg font-bold md:text-xl">Front-end</h2>
              <ul className="style-list-description-project space-y-3 rounded-md bg-white/60 p-1 text-gray-700 duration-300 hover:bg-white md:text-base">
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Aplicação construída em <strong>Next.js</strong> com
                    estilização via <strong>Tailwind CSS</strong>, garantindo
                    performance, componentização e responsividade.{' '}
                    <a
                      href="https://github.com/Romeusorionaet/Nossa-Cidade-WEB"
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-500 underline"
                    >
                      Repositório no github
                    </a>
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <div>
                    <span>
                      Estrutura de pastas bem organizada em <code>src</code>,
                      facilitando manutenção e escalabilidade do projeto:
                    </span>
                    <ul className="style-list-description-project mt-2 flex flex-col items-start font-mono text-gray-700">
                      <li>📁 actions</li>
                      <li>📁 app</li>
                      <li>📁 assets</li>
                      <li>📁 components</li>
                      <li>📁 constants</li>
                      <li>📁 context</li>
                      <li>📁 enums</li>
                      <li>📁 hooks</li>
                      <li>📁 lib</li>
                      <li>📁 providers</li>
                      <li>📁 schemas</li>
                      <li>📁 utils</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    <strong>Header do dashboard</strong> desenvolvido com alta
                    complexidade e foco em usabilidade, servindo como ponto
                    central de navegação.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Conjunto de páginas implementadas para diferentes fluxos:
                    <br />
                    <strong>Dashboard:</strong> painel principal com visão
                    geral.
                    <br />
                    <strong>Prices:</strong> exibição de planos e preços.
                    <br />
                    <strong>Business Point:</strong> listagem de pontos
                    comerciais e página de detalhes.
                    <br />
                    <strong>
                      Register Business Point & Register Details:
                    </strong>{' '}
                    cadastro completo de pontos comerciais.
                    <br />
                    <strong>Save Image & Update:</strong> gerenciamento de
                    imagens e atualizações.
                    <br />
                    <strong>Showcase:</strong> apresentação de conteúdos e
                    destaques.
                    <br />
                    <strong>Mapa City:</strong> mapa interativo com
                    geolocalização.
                    <br />
                    <strong>User:</strong> inclui <em>My Business Points</em> e{' '}
                    <em>Profile</em>.<br />
                    <strong>Auth:</strong> fluxo completo com <em>Sign In</em>,{' '}
                    <em>Sign Up</em>,<em>Confirm Email</em> e{' '}
                    <em>Forgot Password</em>.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Controle de autenticação e preferências utilizando{' '}
                    <strong>cookies</strong> e <strong>localStorage</strong>.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Uso de <strong>React Query (useQuery)</strong> para
                    gerenciamento de requisições, oferecendo{' '}
                    <em>cache automático</em>,{' '}
                    <em>sincronização em tempo real</em>e{' '}
                    <em>melhor experiência do usuário</em> em chamadas
                    assíncronas.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Integração com ferramentas de mapa e localização:
                    <br />
                    <strong>Geolocator:</strong> obtenção precisa da localização
                    do usuário.
                    <br />
                    <strong>MapLibre GL:</strong> renderização de mapas
                    vetoriais de alta performance.
                    <br />
                    <strong>Leaflet:</strong> biblioteca leve para mapas
                    interativos, ampliando a experiência de navegação.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="flex w-full gap-4 max-md:flex-col md:flex-row-reverse">
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:w-2/5">
              <CardProject
                pageURL="https://romeusorionaet.github.io/My-design-system/?path=/docs/example-button--documentation"
                previewDesktop="https://firebasestorage.googleapis.com/v0/b/my-projects-for-portfolio.appspot.com/o/previe-desktop-storybook.png?alt=media&token=2ae11302-e9c7-4091-b4d8-687ee4c72e42"
                previewMobile="https://firebasestorage.googleapis.com/v0/b/my-projects-for-portfolio.appspot.com/o/preview-mobile-storybook.png?alt=media&token=1e4d21a7-c612-4f82-837d-953f9665d2d2"
                title="My Design System"
              />

              <h3>
                <a
                  href="https://romeusorionaet.github.io/My-design-system/?path=/docs/example-button--documentation"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Acesse - My Design System
                </a>
              </h3>

              <p className="text-start text-sm">
                Este é um Design System pessoal, criado com o objetivo de
                demonstrar minhas habilidades no desenvolvimento e documentação
                de bibliotecas de componentes utilizando React, Tailwind CSS e
                ferramentas modernas. O projeto não é destinado para uso em
                produção, mas está disponível para exploração e testes.
              </p>

              <p className="text-start text-sm">
                O Design System foi desenvolvido em formato de monorepo, o que
                facilita o gerenciamento de pacotes e dependências em um único
                repositório.
              </p>

              <p className="text-start text-sm">
                O intuito principal foi realizar o ciclo completo de criação de
                um Design System — desde a concepção visual no Figma até a
                implementação e publicação no npm. Por enquanto, o sistema conta
                com dois componentes base button e input.
              </p>

              <p>
                Confira a documentação no{' '}
                <a
                  href="https://www.npmjs.com/package/@romeusoares/react"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  NPM
                </a>{' '}
                ou no{' '}
                <a
                  href="https://github.com/Romeusorionaet/My-design-system/tree/main/packages/react"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  Repositório
                </a>
              </p>
            </div>
            <div className="flex h-full w-full flex-col justify-center space-y-4 rounded-xl p-2 shadow-md md:w-1/2">
              <h2 className="mb-4 text-lg font-bold md:text-xl">
                <a
                  href="https://www.figma.com/proto/uNZaz2MhLg02jkxJW3vwYU/my-deisgn-system?t=sP3sBzS80Sv5wBWz-1&node-id=7-6"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Design no Figma
                </a>
              </h2>

              <Image
                src="/previews/preview-prototype-design-system.png"
                alt="preview prototype design system"
                width="1000"
                height="1000"
                className="w-full xl:h-96"
              />

              <h3 className="mb-4 text-lg font-bold">O projeto conta com:</h3>

              <ul className="grid gap-4 text-start sm:grid-cols-1 xl:grid-cols-3">
                <li className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                  <span className="text-xl text-purple-600">📦</span>
                  <p className="text-sm text-gray-700">
                    <strong>Changesets:</strong> utilizado para versionamento
                    semântico e geração automatizada de changelogs, garantindo
                    maior controle e consistência nas publicações.
                  </p>
                </li>

                <li className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                  <span className="text-xl text-purple-600">⚙️</span>
                  <p className="text-sm text-gray-700">
                    <strong>Workflows do GitHub Actions:</strong> configurados
                    para executar processos automáticos como testes, build e
                    publicação de pacotes.
                  </p>
                </li>

                <li className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                  <span className="text-xl text-purple-600">🚀</span>
                  <p className="text-sm text-gray-700">
                    <strong>Deploy no npm:</strong> distribuição direta e
                    automatizada do pacote, permitindo fácil instalação em
                    outros projetos.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className="flex w-full gap-4 max-md:flex-col md:flex-row-reverse">
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:w-2/5">
              <CardProject
                pageURL="https://shopping-store-rs.netlify.app"
                previewDesktop="https://firebasestorage.googleapis.com/v0/b/my-projects-for-portfolio.appspot.com/o/preview-shopping-store-desktop-1.png?alt=media&token=dd131a77-2ae5-4437-b7bb-6bc062414709"
                previewMobile="https://firebasestorage.googleapis.com/v0/b/my-projects-for-portfolio.appspot.com/o/preview-shopping-store-mobile.png?alt=media&token=7aac1926-8fb2-46d0-a3d3-734788337d40"
                title="Shopping Store"
              />

              <h3>
                <a
                  href="https://shopping-store-rs.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Acesse - Shopping Store
                </a>
              </h3>

              <p className="text-start text-sm">
                Shopping Store é uma plataforma de e-commerce especializada em
                celulares, onde coloquei em prática muitos dos meus
                conhecimentos. Na loja, você pode explorar uma variedade de
                modelos de celulares, adicionar seus favoritos ao carrinho e
                finalizar a compra.
              </p>

              <p className="text-start text-sm">
                É importante mencionar que algumas funcionalidades introduzidas
                no e-commerce ainda não foram exploradas em sua totalidade. Por
                exemplo, o sistema de notificação atualmente só envia alertas
                quando um comprador tenta realizar uma compra, mas não a
                finaliza, lembrando-o de concluir a transação. Ainda pretendo
                explorar mais, tanto este sistema de notificações quanto outras
                funcionalidades, expandindo-as para outras áreas do e-commerce.
              </p>

              <p>
                Você pode acessar o{' '}
                <a
                  href="https://github.com/Romeusorionaet/Shopping-store/blob/main/README.md"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  Repositório
                </a>{' '}
                para saber mais.
              </p>
            </div>
            <div className="flex h-full w-full flex-col gap-6 md:w-3/4">
              <h2 className="mb-4 text-lg font-bold md:text-xl">
                Sobre a API da Shopping Store
              </h2>

              <ul className="style-list-description-project space-y-3 rounded-md bg-white/60 p-1 text-gray-700 duration-300 hover:bg-white md:text-base">
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Desenvolvida em <strong>Node.js</strong> com{' '}
                    <strong>Fastify</strong>, sem uso de frameworks completos,
                    mas aplicando os princípios de
                    <strong> DDD </strong> e <strong> SOLID</strong> para manter
                    o projeto escalável e organizado.
                    <br />
                    <a
                      href="https://github.com/Romeusorionaet/Api-shopping-store/tree/main/src/infra/http/presenters"
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-600 underline"
                    >
                      Repositório no Github
                    </a>
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Uso de <strong>Redis</strong> para cache, otimizando a
                    performance de respostas e aliviando a carga do banco de
                    dados.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Sistema de autenticação seguro com{' '}
                    <strong>hash de senhas</strong> e<strong> JWT</strong> para
                    controle de sessões.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Integração com o <strong>Stripe</strong> como gateway de
                    pagamento, para gerenciamento de cobranças e planos.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Sistema de notificação em tempo real utilizando{' '}
                    <strong>WebSocket</strong> com a biblioteca{' '}
                    <strong>Socket.io</strong>.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Banco de dados <strong>PostgreSQL</strong> com ORM{' '}
                    <strong>Prisma</strong>, garantindo tipagem e queries
                    seguras.
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-bold">O projeto conta com:</h3>

              <ul className="grid gap-4 text-start sm:grid-cols-1 xl:grid-cols-3">
                <li className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                  <span className="text-xl text-purple-600">⚙️</span>
                  <p className="text-sm text-gray-700">
                    <strong>Workflows do GitHub Actions:</strong> configurados
                    para executar processos automáticos como build, testes
                    unitários e e2e.
                  </p>
                </li>

                <li className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                  <span className="text-xl text-purple-600">🧪</span>
                  <p className="text-sm text-gray-700">
                    <strong>Testes automatizados:</strong> cobertura de{' '}
                    <strong>unitários</strong> e{' '}
                    <strong>end-to-end (e2e)</strong> no backend com{' '}
                    <strong>Vitest</strong> e <strong>Playwright</strong>. No
                    frontend, os testes são feitos com <strong>Vitest</strong> e{' '}
                    <strong>MSW</strong> para Mock.
                  </p>
                </li>
              </ul>

              <h2 className="mb-4 text-lg font-bold md:text-xl">Front-end</h2>

              <ul className="style-list-description-project space-y-3 rounded-md bg-white/60 p-1 text-gray-700 duration-300 hover:bg-white md:text-base">
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Aplicação construída em <strong>Next.js</strong> com
                    estilização via <strong>Tailwind CSS</strong>, garantindo
                    performance, componentização e responsividade.
                    <br />
                    <a
                      href="https://github.com/Romeusorionaet/Shopping-store"
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-600 underline"
                    >
                      Repositório no Github
                    </a>
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Gerenciamento eficiente de dados assíncronos com{' '}
                    <strong>TanStack Query</strong>, otimizando requisições e
                    cache.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Animações suaves e interativas com{' '}
                    <strong>Framer Motion</strong>, elevando a experiência do
                    usuário.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Persistência de sessões e preferências por meio de{' '}
                    <strong>cookies</strong>, garantindo personalização.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Notificações elegantes com <strong>React Toastify</strong>,
                    proporcionando feedback visual claro ao usuário.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Comunicação em tempo real utilizando{' '}
                    <strong>Socket.IO Client</strong>, essencial para interações
                    instantâneas.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Gerenciamento global de estado leve e performático com{' '}
                    <strong>Zustand</strong>, aplicado ao carrinho de compras.
                  </span>
                </li>
                <li>
                  <span className="text-lg text-purple-600">✔</span>
                  <span>
                    Testes robustos com <strong>Vitest</strong>,{' '}
                    <strong>MSW</strong> e <strong>Playwright</strong>, cobrindo
                    cenários unitários e de ponta a ponta (e2e).
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
