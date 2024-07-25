'use client'

import { FormEvent, useContext, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { GithubContext, GithubDataIssueProps } from '@/contexts/github-context'
import { ProfileGithub } from './components/profile-github'
import { ControlButtonsPagination } from '@/components/control-buttons-pagination'
import Link from 'next/link'
import { MarkDown } from '@/components/mark-down'
import { SkeletonCardsGithub } from './components/skeleton-cards-github'
import { NoDataMessageError } from '@/components/message-error/no-data-message-error'

export default function GithubBlog() {
  const [search, setSearch] = useState('')

  const {
    fetchGithubSearchIssues,
    githubDataIssues,
    errGithubDataIssues,
    isLoadingIssues,
  } = useContext(GithubContext)

  const { next, prev, currentData, currentPage, maxPage } = Pagination(
    githubDataIssues || [],
    12,
  )

  if (errGithubDataIssues) {
    return <NoDataMessageError />
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    fetchGithubSearchIssues(search)
  }

  return (
    <main className="pb-8 pt-44">
      <ProfileGithub />

      <form
        onSubmit={handleSubmit}
        className="my-16 flex items-center justify-center gap-4 px-4 max-md:flex-col"
      >
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(event) => setSearch(event.target.value)}
          className="h-10 w-full max-w-[500px] rounded-md p-1 text-dark-1"
        />
        <button
          type="submit"
          className="h-10 w-20 rounded-md border p-2 text-sm duration-500 hover:text-base"
        >
          Buscar
        </button>
      </form>

      <section className="flex flex-wrap items-center justify-center gap-8">
        {isLoadingIssues ? (
          <SkeletonCardsGithub />
        ) : (
          currentData().map((issue: GithubDataIssueProps) => (
            <article
              key={issue.number}
              className="bg-fill relative flex h-44 w-80 flex-col overflow-hidden rounded-md border-t bg-[url('/backgrounds/github.png')] bg-left bg-no-repeat text-sm duration-500 focus-within:border-emerald-500 hover:scale-105 md:w-96 md:text-base"
            >
              <Link
                href={`/technology/details-issue-github/${issue.number}`}
                className="no-underline outline-emerald-500"
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
          ))
        )}
      </section>

      <ControlButtonsPagination
        operation={{ prev, next }}
        currentPage={currentPage}
        maxPage={maxPage}
      />
    </main>
  )
}
