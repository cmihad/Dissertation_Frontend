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

export default {
  login,
  singUp,
  logOut
}
