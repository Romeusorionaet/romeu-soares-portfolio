import { HeaderBlog } from '@/components/header-blog'
import { GithubContextProvider } from '@/contexts/github-context'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <GithubContextProvider>
        <HeaderBlog />
        {children}
      </GithubContextProvider>
    </section>
  )
}
