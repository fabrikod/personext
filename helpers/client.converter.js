export const parseSlug = text => {
  const turkishChars = {
    ç: 'c',
    ğ: 'g',
    ı: 'i',
    ö: 'o',
    ş: 's',
    ü: 'u',
    Ç: 'C',
    Ğ: 'G',
    İ: 'I',
    Ö: 'O',
    Ş: 'S',
    Ü: 'U',
  }
  const slug = text
    .replace(/ç|ğ|ı|ö|ş|ü|Ç|Ğ|İ|Ö|Ş|Ü/g, match => turkishChars[match])
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')

  return slug
}
