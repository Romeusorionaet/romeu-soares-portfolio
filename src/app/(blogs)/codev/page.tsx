'use client'

import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { GithubContext, GithubDataIssueProps } from '@/contexts/github-context'
import { ProfileGithub } from './components/profile-github'
import { ControlButtonsPagination } from '@/components/control-buttons-pagination'
import Link from 'next/link'
import { MarkDown } from '@/components/mark-down'
import { SkeletonCardsGithub } from './components/skeleton-cards-github'
import { NoDataMessageError } from '@/components/messages-errors/no-data-message-error'
import { Pagination } from '@/utils/pagination'
import { routes } from '@/constants/route'
import { FormInputSearch } from '@/components/form-input-search'

export default function Codev() {
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

  const handleSubmit = async (query: string) => {
    if (query) {
      await fetchGithubSearchIssues(query)
    }
  }

  return (
    <main className="pb-8 pt-44">
      <ProfileGithub />

      <div className="my-20 px-1">
        <FormInputSearch handleSubmit={handleSubmit} />
      </div>

      <section className="mb-16 flex flex-wrap items-center justify-center gap-8">
        {isLoadingIssues ? (
          <SkeletonCardsGithub />
        ) : (
          currentData().map((issue: GithubDataIssueProps) => (
            <article
              key={issue.number}
              className="bg-fill relative flex h-44 w-80 flex-col overflow-hidden rounded-md border-t bg-[url('/backgrounds/github.png')] bg-left bg-no-repeat text-sm duration-500 focus-within:border-emerald-500 hover:scale-105 md:w-96 md:text-base"
            >
              <Link
                href={`${routes.codev}/${routes.detailsIssueGithub}/${issue.number}`}
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

      {maxPage > 0 && (
        <ControlButtonsPagination
          operation={{ prev, next }}
          currentPage={currentPage}
          maxPage={maxPage}
        />
      )}
    </main>
  )
}
