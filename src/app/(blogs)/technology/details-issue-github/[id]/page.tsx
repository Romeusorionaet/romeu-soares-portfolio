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
import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { MarkDown } from '@/components/mark-down'

export default function DetailsIssueGithubBlog() {
  const [issueCardDetails, setIssueCardDetails] = useState({
    title: '',
    body: '',
    user: { login: '' },
    updated_at: '',
    comments: '',
  })

  const params = useParams()

  useEffect(() => {
    async function fetchIssueDetails() {
      await apiGithub
        .get(`/repos/Romeusorionaet/MyGithubBlog/issues/${params.id}`)
        .then((response) => response.data)
        .then((data) => setIssueCardDetails(data))
        .catch((err) => console.log(err))
    }

    fetchIssueDetails()
  }, [params])

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
          href={`https://github.com/Romeusorionaet/MyGithubBlog/issues/${params.id}`}
          target="blank"
          className="flex items-center gap-2 no-underline"
        >
          <span className="uppercase">ver no github</span>
          <ArrowRight size={20} />
        </a>
      </nav>

      <article className="mx-auto w-full max-w-[900px]">
        <header className="space-y-8">
          <h2 className="text-xl font-bold">{issueCardDetails.title}</h2>

          <div>
            <div className="flex gap-2">
              <User size={20} color="#7B96B2" />
              <span>{issueCardDetails.user.login}</span>
            </div>

            <div className="flex gap-2">
              <Calendar size={20} color="#7B96B2" />

              <span>
                Há{' '}
                {issueCardDetails.updated_at &&
                  formatDistanceToNow(new Date(issueCardDetails.updated_at), {
                    locale: ptBR,
                  })}
              </span>
            </div>

            <div className="flex gap-2">
              <MessageCircleMoreIcon size={20} color="#7B96B2" />
              <span>{issueCardDetails.comments} comentários</span>
            </div>
          </div>
        </header>

        <MarkDown content={issueCardDetails.body.toString()} />
      </article>
    </main>
  )
}
