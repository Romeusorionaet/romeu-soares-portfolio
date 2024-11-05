import Image from 'next/image'

export function BackgroundOne() {
  return (
    <div className="absolute left-0 top-0 -z-10 w-full max-lg:h-hbp_1 lg:h-screen">
      <Image
        width={36}
        height={36}
        sizes="100vw"
        className="h-full w-full max-md:object-cover"
        src="/backgrounds/pyramids-and-moon.jpg"
        alt=""
      />
    </div>
  )
}
