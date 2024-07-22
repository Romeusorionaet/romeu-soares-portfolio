import { GithubContext } from '@/contexts/github-context'
import { Building, Github, Users } from 'lucide-react'
import { useContext } from 'react'
import Image from 'next/image'

export function HeaderGithub() {
  const { githubData } = useContext(GithubContext)

  return (
    <header>
      <div className="">
        <Image
          width={36}
          height={36}
          sizes="100vw"
          className="h-60 w-52 rounded-full object-contain"
          src={githubData.avatar_url}
          alt="avatar do usuário"
        />
      </div>

      <section>
        <h1>{githubData.name}</h1>
        <p>{githubData.bio}</p>

        <div className="wrapper_summary">
          <div>
            <Github size={20} color="#7B96B2" />
            <span>{githubData.login}</span>
          </div>

          <div>
            <Building size={20} color="#7B96B2" />
            <p>Em busca de uma oportunidade!</p>
          </div>

          <div>
            <Users size={20} color="#7B96B2" />
            <span>{githubData.followers} seguidores</span>
          </div>
        </div>
      </section>
    </header>
  )
}
