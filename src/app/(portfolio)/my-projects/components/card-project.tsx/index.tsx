import Image from 'next/image'

interface ProjectsProps {
  previewDesktop: string
  pageURL: string
  title: string
}

export function CardProject({ previewDesktop, pageURL, title }: ProjectsProps) {
  return (
    <div className="flex h-72 w-96 flex-col items-center rounded-md bg-background p-2">
      <h2>{title}</h2>

      <a
        href={pageURL}
        target="_blank"
        className="h-44 w-full duration-700 hover:h-full"
        rel="noreferrer"
      >
        <Image
          width={36}
          height={36}
          sizes="100vw"
          className="mx-auto h-full w-full rounded-full border-4 border-transparent object-cover hover:rounded-md hover:object-contain"
          src={previewDesktop}
          alt="Loading animation"
        />
      </a>
    </div>
  )
}
