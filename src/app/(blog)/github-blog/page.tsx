'use client'

import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import { GithubContext, GithubDataIssueProps } from '@/contexts/github-context'
import { ProfileGithub } from './components/profile-github'
import { usePagination } from '@/hook/use-pagination'
import { ControlButtonsPagination } from '@/components/control-buttons-pagination'
import Link from 'next/link'

export default function GithubBlog() {
  const { fetchGithubSearchIssues, githubSearchIssue } =
    useContext(GithubContext)

  const { next, prev, currentData, currentPage, maxPage } = usePagination(
    githubSearchIssue || [],
    12,
  )

  return (
    <main className="pb-8 pt-28">
      <ProfileGithub />

      <form className="section_limiter my-16 text-center">
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(event) => fetchGithubSearchIssues(event.target.value)}
          className="mx-auto w-full max-w-[500px] rounded-md p-1"
        />
      </form>

      <section className="flex flex-wrap items-center justify-center gap-4">
        {currentData().map((issue: GithubDataIssueProps) => (
          <Link
            href={`/details/${issue.number}`}
            key={issue.number}
            className="no-underline"
          >
            <article className="flex h-44 w-64 flex-col gap-4 overflow-hidden rounded-md bg-emerald-800 p-2 text-sm duration-500 hover:scale-105 md:w-96 md:text-base">
              <header className="flex justify-between max-md:flex-col">
                <h2 className="font-bold">{issue.title}</h2>
                <span className="whitespace-nowrap text-xs opacity-80">
                  Há{' '}
                  {formatDistanceToNow(new Date(issue.updated_at), {
                    locale: ptBR,
                  })}
                </span>
              </header>

              <ReactMarkdown className="line-clamp-4 overflow-hidden">
                {issue.body}
              </ReactMarkdown>
            </article>
          </Link>
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
