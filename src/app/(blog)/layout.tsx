import { GithubContextProvider } from '@/contexts/github-context'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <GithubContextProvider>{children}</GithubContextProvider>
    </section>
  )
}
