import axios from 'axios'

// const url = 'https://api.mihad.site'
const url = 'http://localhost:5000'

const login = (userCredentials) => {
  return axios.post(`${url}/user/login`, userCredentials)
}
const singUp = (userCredentials) => {
  return axios.post(`${url}/user/register`, userCredentials)
}
const logOut = () => {
  localStorage.clear()
}
const closeAccount = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  const authToken = localStorage.getItem('authToken')

  return axios.delete(`${url}/closeAccount?email=${userData.email}`, authToken)
}
const getUserData = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))

  return axios.get(`${url}/user/profileByEmail?email=${userData.email}`)
}
const updateUserInfo = (data) => {
  return axios.post(`${url}/user/profileUpdate`, data)
}
const getOrdersById = (data) => {
  return axios.get(`${url}/order/${data}`)
}
const purchasedAnProduct = (data) => {
  return axios.post(`${url}/order/create`, data)
}

export default {
  login,
  singUp,
  logOut,
  closeAccount,
  getUserData,
  updateUserInfo,
  getOrdersById,
  purchasedAnProduct
}
