function formatDate(date) {
  const isoString = date
  const parsedDate = new Date(isoString)
  const year = parsedDate.getFullYear()
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
  const day = String(parsedDate.getDate()).padStart(2, '0')

  return `${day}-${month}- ${year}`
}
function getUserId() {
  const luser = localStorage.getItem('userData')
  const user = JSON.parse(luser)
  const userId = user.id

  return userId
}

export default {
  formatDate,
  getUserId
}
