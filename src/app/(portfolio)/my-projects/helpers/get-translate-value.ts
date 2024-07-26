export function GetTranslateValue(targetProject: string) {
  switch (targetProject) {
    case 'personal':
      return 'translate-x-5'
    case 'class':
      return 'translate-x-28'
    case 'freelance':
      return 'translate-x-52'
    default:
      return 'translate-x-0'
  }
}
