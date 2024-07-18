import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import '../assets/styles/global.css'
import { Header } from '@/components/header'

const prompt = Prompt({ subsets: ['latin'], weight: '400' })

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
    <html lang="en">
      <body className={`${prompt.className} antialiased`}>
        <Header />

        {children}
      </body>
    </html>
  )
}
