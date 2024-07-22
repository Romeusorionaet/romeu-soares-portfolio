'use client'

import { apiGithub } from '@/lib/api-github'
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
  githubData: GithubDataProps
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
  const [githubData, setGithubData] = useState({
    avatar_url: '',
    name: '',
    bio: '',
    login: '',
    followers: 0,
    public_repos: 0,
  })

  const [githubSearchIssue, setGithubSearchIssue] = useState<
    GithubDataIssueProps[]
  >([])

  async function fetchGithubProfile() {
    await apiGithub
      .get(`/users/Romeusorionaet`)
      .then((response) => response.data)
      .then((data) => setGithubData(data))
  }

  async function fetchGithubSearchIssues(seacrh: string) {
    await apiGithub
      .get(`/search/issues?q=${seacrh}%20repo:Romeusorionaet/MyGithubBlog`)
      .then((response) => response.data)
      .then((data) => setGithubSearchIssue(data.items))
  }

  useEffect(() => {
    fetchGithubSearchIssues('')
  }, [])

  useEffect(() => {
    fetchGithubProfile()
  }, [])

  return (
    <GithubContext.Provider
      value={{
        githubData,
        githubSearchIssue,
        fetchGithubSearchIssues,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
