'use client'

import { apiGithub } from '@/lib/api-github'
import { useQuery } from '@tanstack/react-query'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface GithubDataProps {
  avatar_url: string
  name: string
  bio: string
  login: string
  followers: number
  public_repos: number
}

export interface GithubDataIssueProps {
  number: number
  title: string
  body: string
  updated_at: string
}

interface GithubContextType {
  errGithubDataProfile: Error | null
  isLoadingProfile: boolean
  githubDataProfile: GithubDataProps
  githubSearchIssue: GithubDataIssueProps[]
  fetchGithubSearchIssues: (search: string) => void
}

interface GithubContextProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubContextProvider({
  children,
}: GithubContextProviderProps) {
  const {
    data: githubDataProfile,
    isLoading: isLoadingProfile,
    error: errGithubDataProfile,
  } = useQuery({
    queryKey: ['profile-github'],
    queryFn: () =>
      apiGithub.get(`/users/Romeusorionaet`).then((response) => response.data),
  })

  const [githubSearchIssue, setGithubSearchIssue] = useState<
    GithubDataIssueProps[]
  >([])

  async function fetchGithubSearchIssues(search: string) {
    await apiGithub
      .get(`/search/issues?q=${search}%20repo:Romeusorionaet/MyGithubBlog`)
      .then((response) => response.data)
      .then((data) => setGithubSearchIssue(data.items))
  }

  useEffect(() => {
    fetchGithubSearchIssues('')
  }, [])

  return (
    <GithubContext.Provider
      value={{
        errGithubDataProfile,
        isLoadingProfile,
        githubDataProfile,
        githubSearchIssue,
        fetchGithubSearchIssues,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
