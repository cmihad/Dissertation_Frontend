import axios from 'axios'

const url = 'http://api.mihad.site'
const login = (userCredentials) => {
  console.log(userCredentials)
  return axios.post(`${url}/user/login`, userCredentials)
}

export default {
  login
}
