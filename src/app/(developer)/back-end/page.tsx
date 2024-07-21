import { MovingBackgroundBalls } from '@/components/moving-card/moving-background-balls'

export default function BackEnd() {
  return (
    <main className="relative overflow-hidden px-4 py-28">
      {Array.from({ length: 10 }).map((_, index) => (
        <MovingBackgroundBalls key={index} />
      ))}

      <h1 className="style_title_1 online-block mx-auto w-5/6 text-center">
        Meus conhecimentos como programador Back-End
      </h1>

      <section className="section_limiter mt-28 flex flex-col gap-6">
        <div>
          <h2 className="mb-8 text-xl font-bold">Nodejs</h2>

          <div className="group cursor-pointer">
            <p className="font-bold">Testes:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Testes Unitários e End-2-End: Experiência com o Vitest para
                testar a funcionalidade completa das aplicações.
              </li>
              <li>Supertest: Utilizado para testar endpoints HTTP.</li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <p className="font-bold">Frameworks e Conceitos:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Fastify e Express: Adquiri habilidades no uso de ambos
                frameworks para o desenvolvimento back-end.
              </li>
              <li>
                SOLID: Princípios de design para criar código sustentável e
                flexível.
              </li>
              <li>
                Clean Architecture: Estrutura para separar as responsabilidades
                e manter o código organizado.
              </li>
              <li>
                DDD (Domain-Driven Design): Abordagem para modelar complexidade
                de domínios.
              </li>
              <li>
                Padrões de Design: Familiaridade com o Factory Pattern e o
                Repository Pattern para criar um código eficiente.
              </li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <p className="font-bold">Autenticação e Autorização:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                JWT (JSON Web Tokens): Experiência com tokens de autenticação
                para segurança de aplicações.
              </li>
              <li>
                OAuth: Implementação para integração com provedores de
                autenticação como Google, Facebook, etc.
              </li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <p className="font-bold">Docker:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Docker: Containerização de aplicações para ambiente de
                desenvolvimento.
              </li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <p className="font-bold">Caching:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                Redis: Uso para melhorar a performance de leitura de dados.
              </li>
            </ul>
          </div>

          <div className="group cursor-pointer">
            <p className="font-bold">Banco de Dados e ORM:</p>
            <ul className="hover_expand_list scrollbar">
              <li>
                PostgreSQL: Experiência com banco de dados relacional poderoso e
                confiável.
              </li>
              <li>
                MySQL: Conhecimento em banco de dados relacional amplamente
                utilizado.
              </li>
              <li>
                Prisma: ORM para Node.js que facilita a interação com bancos de
                dados relacionais.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
