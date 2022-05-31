export function toKebabCase (str = '') {
  return str
    .replace(/[^a-z]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase()
}

export function isObject (data:any) {
  return typeof data === 'object' && 
    !Array.isArray(data) &&
    data !== null &&
    data !== undefined
}

export const replaceChar = (str:any, find = '[-_\\\/]', value = '') => str && str.replace(new RegExp(find, 'g'), value)

export const isEmpty = (data:any) => {
  if (isObject(data)) {
    return Object.keys(data).length === 0
  } 

  return data.length === 0
}