'use client'

import { apiGithub } from '@/lib/api-github'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MessageCircleMoreIcon,
  User,
} from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { MarkDown } from '@/components/mark-down'
import { useQuery } from '@tanstack/react-query'
import { NoDataMessageError } from '@/components/messages-errors/no-data-message-error'
import { GithubDataIssueProps } from '@/contexts/github-context'
import { LoadingLampReappearing } from '@/components/loadings/lamp-reappearing'
import { nameRepoOfIssue } from '@/constants/name-repo-of-issue'

export default function DetailsIssueGithubBlog() {
  const params = useParams()

  const {
    data: issueDetails,
    isLoading: isLoadingIssueDetails,
    error: errIssueDetails,
  } = useQuery<GithubDataIssueProps>({
    queryKey: ['github-issue-details', params.id],
    queryFn: () =>
      apiGithub
        .get(
          `/repos/Romeusorionaet/${nameRepoOfIssue.myPortfolio}/issues/${params.id}`,
        )
        .then((response) => response.data),
    staleTime: 86400000, // 24 hours,
  })

  if (isLoadingIssueDetails) {
    return (
      <div className="pt-40">
        <LoadingLampReappearing />
      </div>
    )
  }

  if (errIssueDetails) {
    return <NoDataMessageError />
  }

  return (
    <main className="section_limiter px-4 pb-8 pt-44">
      <nav className="mb-28 flex justify-between text-sm md:text-base">
        <Link
          href="/technology"
          className="flex items-center gap-2 no-underline"
        >
          <ArrowLeft size={20} />
          <span className="uppercase">voltar</span>
        </Link>

        <a
          href={`https://github.com/Romeusorionaet/${nameRepoOfIssue.myPortfolio}/issues/${params.id}`}
          target="blank"
          className="flex items-center gap-2 no-underline"
        >
          <span className="uppercase">ver no github</span>
          <ArrowRight size={20} />
        </a>
      </nav>

      {issueDetails && (
        <article className="mx-auto w-full max-w-[900px]">
          <header className="space-y-8">
            <h2 className="text-xl font-bold">{issueDetails.title}</h2>

            <div>
              <div className="flex gap-2">
                <User size={20} color="#7B96B2" />
                <span>{issueDetails.user.login}</span>
              </div>

              <div className="flex gap-2">
                <Calendar size={20} color="#7B96B2" />

                <span>
                  Há{' '}
                  {issueDetails.updated_at &&
                    formatDistanceToNow(new Date(issueDetails.updated_at), {
                      locale: ptBR,
                    })}
                </span>
              </div>

              <div className="flex gap-2">
                <MessageCircleMoreIcon size={20} color="#7B96B2" />
                <span>{issueDetails.comments} comentários</span>
              </div>
            </div>
          </header>

          <MarkDown content={issueDetails.body.toString()} />
        </article>
      )}
    </main>
  )
}
