export function GetTranslateValue(targetProject: string) {
  switch (targetProject) {
    case 'personal':
      return 'translate-x-5'
    case 'class':
<<<<<<< HEAD
      return 'translate-x-28'
=======
      return 'translate-x-24'
>>>>>>> 7eb89d7 (refactor: created function helper and constants for topics)
    case 'freelance':
      return 'translate-x-52'
    default:
      return 'translate-x-0'
  }
}
