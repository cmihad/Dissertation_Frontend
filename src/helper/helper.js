function formatDate(date) {
  const isoString = date
  const parsedDate = new Date(isoString)
  const year = parsedDate.getFullYear()
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
  const day = String(parsedDate.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export default {
  formatDate
}
