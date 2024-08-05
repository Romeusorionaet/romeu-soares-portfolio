'use client'

import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'

interface Props {
  operation: {
    prev: () => void
    next: () => void
  }
  currentPage: number
  maxPage: number
}

export function ControlButtonsPagination({
  operation,
  currentPage,
  maxPage,
}: Props) {
  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <button
        onClick={operation.prev}
        disabled={currentPage === 1}
        className="rounded-md p-2 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-20"
      >
        <ArrowBigLeft />
      </button>

      <span>
        {currentPage} / {maxPage}
      </span>

      <button
        onClick={operation.next}
        disabled={currentPage === maxPage}
        className="rounded-md p-2 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-20"
      >
        <ArrowBigRight />
      </button>
    </div>
  )
}
