'use client'

import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { GithubContext, GithubDataIssueProps } from '@/contexts/github-context'
import { ProfileGithub } from './components/profile-github'
import { usePagination } from '@/hook/use-pagination'
import { ControlButtonsPagination } from '@/components/control-buttons-pagination'
import Link from 'next/link'
import { MarkDown } from '@/components/mark-down'

export default function GithubBlog() {
  const { fetchGithubSearchIssues, githubSearchIssue } =
    useContext(GithubContext)

  const { next, prev, currentData, currentPage, maxPage } = usePagination(
    githubSearchIssue || [],
    12,
  )

  return (
    <main className="pb-8 pt-44">
      <ProfileGithub />

      <form className="section_limiter my-16 px-4 text-center">
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(event) => fetchGithubSearchIssues(event.target.value)}
          className="mx-auto w-full max-w-[500px] rounded-md p-1"
        />
      </form>

      <section className="flex flex-wrap items-center justify-center gap-8">
        {currentData().map((issue: GithubDataIssueProps) => (
          <article
            key={issue.number}
            className="bg-fill relative flex h-44 w-80 flex-col overflow-hidden rounded-md border-t bg-[url('/backgrounds/github.png')] bg-left bg-no-repeat text-sm duration-500 hover:scale-105 md:w-96 md:text-base"
          >
            <Link
              href={`/details-issue-github-blog/${issue.number}`}
              className="no-underline"
            >
              <header className="line-clamp-2 flex h-16 justify-between gap-1 px-2 py-1 max-md:flex-col md:h-12">
                <h2 className="font-bold underline">{issue.title}</h2>
                <span className="whitespace-nowrap text-xs opacity-80">
                  Há{' '}
                  {formatDistanceToNow(new Date(issue.updated_at), {
                    locale: ptBR,
                  })}
                </span>
              </header>
            </Link>

            <div className="p-2">
              <MarkDown content={issue.body} />
            </div>

            <div className="absolute bottom-0 h-10 w-full bg-gradient-to-t from-background" />
          </article>
        ))}
      </section>

      <ControlButtonsPagination
        operation={{ prev, next }}
        currentPage={currentPage}
        maxPage={maxPage}
      />
    </main>
  )
}
