'use client'

import { apiGithub } from '@/lib/api-github'
import { useQuery } from '@tanstack/react-query'
import { ReactNode, createContext, useState } from 'react'

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
  errGithubDataIssues: Error | null
  isLoadingProfile: boolean
  isLoadingIssues: boolean
  githubDataProfile: GithubDataProps
  githubDataIssues: GithubDataIssueProps[]
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

  const [search, setSearch] = useState('')

  const {
    data: githubDataIssues = [],
    isLoading: isLoadingIssues,
    error: errGithubDataIssues,
    refetch,
  } = useQuery({
    queryKey: [`issues-github`, search],
    queryFn: () =>
      apiGithub
        .get(`/search/issues?q=${search}%20repo:Romeusorionaet/MyGithubBlog`)
        .then((response) => response.data.items),
    staleTime: 86400000, // 24 hours,
  })

  const fetchGithubSearchIssues = (searchTerm: string) => {
    if (searchTerm.trim()) {
      setSearch(searchTerm)
      refetch()
    }
  }

  return (
    <GithubContext.Provider
      value={{
        errGithubDataProfile,
        errGithubDataIssues,
        isLoadingProfile,
        isLoadingIssues,
        githubDataProfile,
        githubDataIssues,
        fetchGithubSearchIssues,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
