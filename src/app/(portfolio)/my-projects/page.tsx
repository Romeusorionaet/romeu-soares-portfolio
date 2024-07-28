'use client'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import Image from 'next/image'
import { CardProject } from './components/card-project'
import { NoDataMessageError } from '@/components/messages-errors/no-data-message-error'
import { LoadingLampReappearing } from '@/components/loadings/lamp-reappearing'
import { filterProjectsByType } from './helpers/filter-projects-by-type'
import { topicsProjects } from '@/constants/topics-projects'
import { GetTranslateValue } from './helpers/get-translate-value'
import { fetchProjects, ProjectsProps } from '@/actions/firebase'

export default function MyProjects() {
  const [targetProject, setTargetProject] = useState(topicsProjects.PERSONAL)

  const targetProjectOfList = GetTranslateValue(targetProject)

  const {
    data: projects,
    isLoading,
    error,
  } = useQuery<ProjectsProps[]>({
    queryKey: ['my-projects'],
    queryFn: async () => await fetchProjects(),
    staleTime: 86400000, // 24 hours
  })

  if (isLoading) {
    return (
      <div className="pt-44">
        <LoadingLampReappearing />
      </div>
    )
  }

  if (error || !projects) {
    return <NoDataMessageError />
  }

  if (projects.length === 0) {
    return <p className="pt-40 text-center opacity-80">Sem projetos.</p>
  }

  const projectsPersonal = filterProjectsByType(
    projects,
    topicsProjects.PERSONAL,
  )

  const projectsClass = filterProjectsByType(projects, topicsProjects.CLASS)

  const projectsFreelancer = filterProjectsByType(
    projects,
    topicsProjects.FREELANCE,
  )

  const handleTargetProject = (topic: string) => {
    setTargetProject(topic)
  }

  return (
    <main className="pb-28 pt-40">
      <h1 className="style_title_1 text-center">Meus projetos web</h1>

      <section className="section_limiter relative mt-28 px-4">
        <div
          className={`absolute -top-10 -z-10 h-16 w-20 transition-transform duration-300 ${targetProjectOfList}`}
        >
          <Image
            width={36}
            height={36}
            sizes="100vw"
            className="mx-auto h-full w-full rounded-full border-4 border-transparent object-cover"
            src="/gifs/loadings/amoeba.gif"
            alt="Loading animation"
          />
        </div>

        <ul className="flex w-80 justify-center gap-10 rounded-md p-2 uppercase">
          <li
            onClick={() => handleTargetProject(topicsProjects.PERSONAL)}
            className="cursor-pointer"
          >
            <button>Pessoais</button>
          </li>
          <li
            onClick={() => handleTargetProject(topicsProjects.CLASS)}
            className="cursor-pointer"
          >
            <button>Aula</button>
          </li>
          <li
            onClick={() => handleTargetProject(topicsProjects.FREELANCE)}
            className="cursor-pointer"
          >
            <button>Freelancer</button>
          </li>
        </ul>
      </section>

      <section className="section_limiter mt-16 flex flex-wrap px-4">
        <div
          data-value={targetProject}
          className="container_card_project data-[value=personal]:flex"
        >
          {projectsPersonal.map((item) => {
            return (
              <CardProject
                key={item.id}
                previewDesktop={item.previewDesktop}
                previewMobile={item.previewMobile}
                pageURL={item.pageURL}
                title={item.title}
              />
            )
          })}
        </div>

        <div
          data-value={targetProject}
          className="container_card_project data-[value=class]:flex"
        >
          {projectsClass.map((item) => {
            return (
              <CardProject
                key={item.id}
                previewDesktop={item.previewDesktop}
                previewMobile={item.previewMobile}
                pageURL={item.pageURL}
                title={item.title}
              />
            )
          })}
        </div>

        <div
          data-value={targetProject}
          className="container_card_project data-[value=freelance]:flex"
        >
          {projectsFreelancer.map((item) => {
            return (
              <CardProject
                key={item.id}
                previewDesktop={item.previewDesktop}
                previewMobile={item.previewMobile}
                pageURL={item.pageURL}
                title={item.title}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}
