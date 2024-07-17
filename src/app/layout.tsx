import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../assets/styles/global.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} mx-auto max-w-[1680px] antialiased`}>
        {children}
      </body>
    </html>
  )
}
