export interface TitleMap {
  [key: string]: string
}

export function TranslateTitle(title: string, translations: TitleMap): string {
  return translations[title] || title
}
