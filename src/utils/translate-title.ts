export interface TitleMap {
  [key: string]: string
}

export function translateTitle(title: string, translations: TitleMap): string {
  return translations[title] || title
}
