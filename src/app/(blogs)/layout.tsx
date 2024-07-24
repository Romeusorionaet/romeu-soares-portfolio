import { HeaderBlog } from '@/components/header-blog'
import ClientProviders from '@/utils/client-providers'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <ClientProviders>
        <HeaderBlog />
        {children}
      </ClientProviders>
    </section>
  )
}
