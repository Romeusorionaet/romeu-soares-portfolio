'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'

interface Props {
  handleSubmit: (query: string) => Promise<void>
}

export function FormInputSearch({ handleSubmit }: Props) {
  const [valueInput, setValueInput] = useState('')

  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    handleSubmit(query.toString())

    if (query !== `/codev?q=${query}`) {
      router.push(`/codev?q=${query}`)
    }
  }

  return (
    <div className="z-10 mx-auto w-full max-w-[600px]">
      <form
        onSubmit={handleSearch}
        className="flex w-full max-w-[600px] items-center gap-3 rounded-md border px-5 py-3 ring-zinc-700"
      >
        <Search size={24} />

        <input
          type="text"
          defaultValue={query ?? ''}
          placeholder="Buscar produtos..."
          onChange={(e) => setValueInput(e.target.value)}
          name="q"
          required
          className="flex-1 bg-transparent text-sm outline-none"
        />

        <button
          type="submit"
          disabled={!valueInput}
          className="rounded-md p-1 duration-700 hover:scale-105 disabled:cursor-not-allowed"
        >
          buscar
        </button>
      </form>
    </div>
  )
}
