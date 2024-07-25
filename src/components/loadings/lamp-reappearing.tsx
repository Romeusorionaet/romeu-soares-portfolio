import Image from 'next/image'

export function LoadingLampReappearing() {
  return (
    <Image
      width={36}
      height={36}
      sizes="100vw"
      className="mx-auto h-40 w-40 rounded-full border-4 border-transparent object-cover"
      src="/gifs/loadings/loading-1.gif"
      alt="Loading animation"
    />
  )
}
