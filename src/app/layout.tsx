import type { Metadata } from 'next'
import { Prompt, Slackey } from 'next/font/google'
import '@/assets/styles/global.css'
import '@/assets/styles/scrollbar.css'
import '@/assets/styles/scrollbar-global.css'
import ClientProviders from '@/utils/client-providers'

const prompt = Prompt({
  subsets: ['latin'],
  variable: '--font-prompt',
  weight: '400',
})
const slackey = Slackey({
  subsets: ['latin'],
  variable: '--font-slackey',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Romeu Soares / Web developer',
  description:
    'Criei este portfólio no intuito de mostrar minhas habilidades como Web developer. Nele você irá encontrar diversos projetos interessantes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${prompt.variable} ${slackey.variable} antialiased`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
