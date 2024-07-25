interface PropsGear {
  description: string
  title: string
  url: string
}

export function CardGear({ url, title, description }: PropsGear) {
  return (
    <div className="flex h-80 w-72 flex-col items-center justify-center gap-2 rounded-lg px-2 hover:bg-zinc-600">
      <div className="h-20 w-20">
        <a href={url} target="blank">
          <img className="h-full w-full rounded-lg" src={url} alt={title} />
        </a>
      </div>

      <div className="text-center">
        <h2 className="font-bold">{title}</h2>

        <p className="my-1 px-1">{description}</p>
      </div>
    </div>
  )
}
