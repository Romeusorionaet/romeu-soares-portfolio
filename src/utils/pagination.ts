'use client'

import { useState } from 'react'

export function Pagination(data: any, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1)

  const maxPage = Math.ceil(data.length / itemsPerPage)

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
    return data.slice(begin, end)
  }

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
  }

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
  }

  return { next, prev, currentData, currentPage, maxPage }
}
