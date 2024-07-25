import { ProjectsProps } from '../page'

export function filterProjectsByType(projects: ProjectsProps[], type: string) {
  return projects.filter((item) => item.type === type)
}
