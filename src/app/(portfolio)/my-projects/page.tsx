'use client'

import { db } from '@/lib/firebase-config'
import { useQuery } from '@tanstack/react-query'
import { collection, getDocs } from 'firebase/firestore'
import { useState } from 'react'
import Image from 'next/image'
import { CardProject } from './components/card-project.tsx'
import { GetTranslateValue } from './helpers/get-translate-value'
import { NoDataMessageError } from '@/components/messages-errors/no-data-message-error'
import { LoadingLampReappearing } from '@/components/loadings/lamp-reappearing'
import { filterProjectsByType } from './helpers/filter-projects-by-type'
import { topicsProjects } from '@/constants/topics-projects'

export interface ProjectsProps {
  previewDesktop: string
  pageURL: string
  title: string
  type: string
  id: string
}

export default function MyProjects() {
  const [targetProject, setTargetProject] = useState(topicsProjects.PERSONAL)

  const targetProjectOfList = GetTranslateValue(targetProject)

  const {
    data: projects,
    isLoading,
    error,
  } = useQuery<ProjectsProps[]>({
    queryKey: ['my-projects'],
    queryFn: async () => {
      const querySnapshot = await getDocs(collection(db, 'projects'))
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ProjectsProps[]
    },
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
    <main className="pb-8 pt-28">
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
            Pessoais
          </li>
          <li
            onClick={() => handleTargetProject(topicsProjects.CLASS)}
            className="cursor-pointer"
          >
            Aula
          </li>
          <li
            onClick={() => handleTargetProject(topicsProjects.FREELANCE)}
            className="cursor-pointer"
          >
            Freelancer
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
