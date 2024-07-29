'use server'

import { db } from '@/lib/firebase-config'
import { collection, getDocs } from 'firebase/firestore'

export interface ProjectsProps {
  previewDesktop: string
  previewMobile: string
  pageURL: string
  title: string
  description: string
  type: string
  id: string
}

export const fetchProjects = async (): Promise<ProjectsProps[]> => {
  const querySnapshot = await getDocs(collection(db, 'projects'))
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as ProjectsProps[]
}
