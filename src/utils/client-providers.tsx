'use client'

import { GithubContextProvider } from '@/contexts/github-context'
import { queryClient } from '@/lib/query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GithubContextProvider>{children}</GithubContextProvider>
    </QueryClientProvider>
  )
}
