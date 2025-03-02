import { CardGear } from './components/card-gear'
import gears from '@/lib/gears.json'

export default function Gear() {
  return (
    <main className="pb-8 pt-56">
      <h1 className="style_title_1 text-center">SetUp</h1>

      <section className="section_limiter mt-10 flex flex-wrap items-center justify-center px-4 md:gap-4">
        {gears.map((item) => {
          return (
            <CardGear
              key={item.id}
              title={item.title}
              description={item.description}
              url={item.url}
            />
          )
        })}
      </section>
    </main>
  )
}
