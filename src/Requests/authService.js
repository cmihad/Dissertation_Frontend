import axios from 'axios'

const url = 'https://api.mihad.site'
const login = (userCredentials) => {
  console.log(userCredentials)
  return axios.get(`${url}/user/login`, userCredentials)
}

export default {
  login
}
