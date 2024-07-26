export function GetTranslateValue(targetProject: string) {
  switch (targetProject) {
    case 'personal':
      return 'translate-x-5'
    case 'class':
<<<<<<< HEAD
<<<<<<< HEAD
      return 'translate-x-28'
=======
      return 'translate-x-24'
>>>>>>> 7eb89d7 (refactor: created function helper and constants for topics)
=======
      return 'translate-x-28'
>>>>>>> ead0990 (fixed value css from layouts)
    case 'freelance':
      return 'translate-x-52'
    default:
      return 'translate-x-0'
  }
}
