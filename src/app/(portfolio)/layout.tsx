import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  )
}
