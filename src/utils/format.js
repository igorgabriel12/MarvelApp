export function removeSpecialCharacteres(value) {
  return value.replace(/[^a-zA-Z0-9 ]/g, '')
}
