import { GithubContext } from '@/contexts/github-context'
import { Book, Building, User, Users } from 'lucide-react'
import { useContext } from 'react'
import Image from 'next/image'

export function ProfileGithub() {
  const { githubDataProfile, isLoadingProfile, errGithubDataProfile } =
    useContext(GithubContext)

  if (isLoadingProfile) {
    return (
      <img
        className="mx-auto h-40 w-40 rounded-full border-4 border-transparent object-cover"
        src="/gifs/loadings/loading-1.gif"
        alt="Loading animation"
      />
    )
  }

  if (errGithubDataProfile) {
    return
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 px-4">
      <Image
        width={36}
        height={36}
        sizes="100vw"
        className="h-16 w-16 rounded-full object-contain md:h-32 md:w-32"
        src={githubDataProfile.avatar_url}
        alt="avatar do usuário do github"
      />

      <div className="text-center">
        <h1>{githubDataProfile.name}</h1>

        <p className="mx-auto inline-block lg:w-1/2">{githubDataProfile.bio}</p>

        <div className="mt-4 flex flex-col gap-2">
          <div className="flex gap-2">
            <User size={20} color="#7B96B2" />
            <span>{githubDataProfile.login}</span>
          </div>

          <div className="flex gap-2">
            <Building size={20} color="#7B96B2" />
            <p>contrate-me</p>
          </div>

          <div className="flex gap-2">
            <Users size={20} color="#7B96B2" />
            <span>{githubDataProfile.followers} seguidores</span>
          </div>

          <div className="flex gap-2">
            <Book size={20} color="#7B96B2" />
            <span>{githubDataProfile.public_repos} Publicações</span>
          </div>
        </div>
      </div>
    </section>
  )
}
