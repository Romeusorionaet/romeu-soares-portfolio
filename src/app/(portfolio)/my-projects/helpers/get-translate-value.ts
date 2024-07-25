export function GetTranslateValue(targetProject: string) {
  switch (targetProject) {
    case 'personal':
      return 'translate-x-0'
    case 'class':
      return 'translate-x-24'
    case 'freelancer':
      return 'translate-x-52'
    default:
      return 'translate-x-0'
  }
}
