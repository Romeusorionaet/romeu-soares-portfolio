import { GithubContext } from '@/contexts/github-context'
import { Building, Github, Users } from 'lucide-react'
import { useContext } from 'react'
import Image from 'next/image'

export function ProfileGithub() {
  const { githubData } = useContext(GithubContext)

  return (
    <section className="flex flex-col items-center justify-center gap-4 px-4">
      <Image
        width={36}
        height={36}
        sizes="100vw"
        priority
        className="h-16 w-16 rounded-full object-contain md:h-32 md:w-32"
        src={githubData.avatar_url}
        alt="avatar do usuário do github"
      />

      <div className="text-center">
        <h1>{githubData.name}</h1>

        <p className="mx-auto inline-block lg:w-1/2">{githubData.bio}</p>

        <div className="mt-4 flex flex-col gap-2">
          <div className="flex gap-2">
            <Github size={20} color="#7B96B2" />
            <span>{githubData.login}</span>
          </div>

          <div className="flex gap-2">
            <Building size={20} color="#7B96B2" />
            <p>Em busca de uma oportunidade!</p>
          </div>

          <div className="flex gap-2">
            <Users size={20} color="#7B96B2" />
            <span>{githubData.followers} seguidores</span>
          </div>

          <div className="flex gap-2">
            <p>Icon</p>
            <span>{githubData.public_repos} Publicações</span>
          </div>
        </div>
      </div>
    </section>
  )
}
