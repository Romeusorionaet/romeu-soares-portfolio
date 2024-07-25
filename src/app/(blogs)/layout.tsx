import { HeaderBlog } from '@/components/header-blog'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <HeaderBlog />
      {children}
    </section>
  )
}
