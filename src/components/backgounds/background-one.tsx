import Image from 'next/image'
import bg1 from '../../assets/img/backgrounds-img/bg-1.png'

export function BackgroundOne() {
  return (
    <div className="absolute left-0 top-0 -z-10 w-full max-lg:h-hbp_1 lg:h-screen">
      <Image
        width={36}
        height={36}
        sizes="100vw"
        className="h-full w-full"
        src={bg1}
        alt=""
      />
    </div>
  )
}
