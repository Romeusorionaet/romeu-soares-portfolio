import react from '../../assets/img/stacks/front-end/reactLogo.png'
import typescript from '../../assets/img/stacks/front-end/typeScriptLogo.svg'
import javascript from '../../assets/img/stacks/front-end/javascriptLogo.png'
import html from '../../assets/img/stacks/front-end/htmlLogo.png'
import css from '../../assets/img/stacks/front-end/cssLogo.png'
import tailwindcss from '../../assets/img/stacks/front-end/tailwindcssLogo.svg'
import nextjs from '../../assets/img/stacks/front-end/nextjs.svg'
import { CardStack } from './card-stack'

export function CardsStacksFrontEnd() {
  const stacks = [
    {
      id: 1,
      link: 'https://react.dev/',
      description:
        'O React permite criar interfaces de usuário a partir de peças individuais chamadas componentes. Crie seus próprios componentes do React, como Thumbnail, LikeButton e Video...ler mais',
      file: react,
    },
    {
      id: 2,
      link: 'https://www.typescriptlang.org/',
      description:
        'TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala...ler mais',
      file: typescript,
    },
    {
      id: 3,
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
      description:
        'JavaScript® é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web...ler mais',
      file: javascript,
    },
    {
      id: 4,
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
      description:
        'HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web...ler mais',
      file: html,
    },
    {
      id: 5,
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
      description:
        '(Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML...ler mais',
      file: css,
    },
    {
      id: 6,
      link: 'https://tailwindcss.com/',
      description:
        'Crie rapidamente sites modernos sem sair do seu HTML. Uma estrutura CSS de utilidade inicial repleta de classes como flex, pt-4, text-center e rotate-90 que pode ser composta para...ler mais',
      file: tailwindcss,
    },
    {
      id: 7,
      link: 'https://nextjs.org/',
      description:
        'O Next.js permite que você crie aplicativos da Web de alta qualidade com o poder dos componentes React...ler mais',
      file: nextjs,
    },
  ]

  return <CardStack stacks={stacks} />
}
