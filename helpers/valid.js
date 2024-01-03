export const blogValid = (columns, fields) => {
  for (const field of fields) {
    const isColumn = columns.find(column => column === field)
    if (!Boolean(isColumn)) {
      return false
    }
  }
  return true
}
