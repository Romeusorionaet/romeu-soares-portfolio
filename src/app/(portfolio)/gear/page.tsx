import { CardGear } from './components/card-gear'
import gears from '@/lib/gears.json'

export default function Gear() {
  return (
    <main className="pb-8 pt-28">
      <h1 className="style_title_1 text-center">SetUp</h1>

      <section className="section_limiter mt-28 flex flex-wrap items-center justify-center gap-4 px-4">
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
