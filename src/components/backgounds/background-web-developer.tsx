import Image from 'next/image'

export function BackgroundWebDeveloper() {
  return (
    <div className="relative -z-10">
      <Image
        width={36}
        height={36}
        sizes="100vw"
        src="/backgrounds/wave.png"
        alt=""
        className="-mt-16 h-full w-full md:-mt-40"
      />
      <Image
        width={36}
        height={36}
        sizes="100vw"
        src="/backgrounds/code.png"
        alt=""
        className="absolute left-10 top-10 md:h-28 md:w-28 xl:left-20 xl:top-28"
      />
    </div>
  )
}
