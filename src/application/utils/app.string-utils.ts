export class AppStringUtils {
  toCamelCase (oldString: string): string {
    const newString = oldString.toLowerCase()
      .trim()
      .split(/[ -_]/g)
      .map(word => word.replace(word[0], word[0].toString().toUpperCase()))
      .join('')

    return newString.replace(newString[0], newString[0].toLowerCase())
  }
}
