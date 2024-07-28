import { ProjectsProps } from '@/actions/firebase/fetch-projects'

export function filterProjectsByType(projects: ProjectsProps[], type: string) {
  return projects.filter((item) => item.type === type)
}
