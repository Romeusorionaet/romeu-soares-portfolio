export function SkeletonCardsGithub() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="h-44 w-80 animate-pulse rounded-md bg-zinc-100"
        />
      ))}
    </div>
  )
}
