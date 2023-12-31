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
  console.log(authToken, 'authtoken baby')

  return axios.delete(`${url}/user/closeAccount?email=${userData.email}`, {
    headers: {
      authorization: authToken
    }
  })
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
const searchedAnProduct = (data) => {
  return axios.post(`${url}/searched/create`, data)
}
const getSearchData = (data) => {
  return axios.get(`${url}/searched/${data}`)
}

export default {
  login,
  singUp,
  logOut,
  closeAccount,
  getUserData,
  updateUserInfo,
  getOrdersById,
  purchasedAnProduct,
  searchedAnProduct,
  getSearchData
}
