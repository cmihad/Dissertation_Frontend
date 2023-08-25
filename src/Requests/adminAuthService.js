import axios from 'axios'

// const url = 'https://api.mihad.site'
const url = 'http://localhost:5000'
const adminHeaders = {
  headers: {
    admintoken: localStorage.getItem('admintoken')
  }
}

const getAllUsers = () => {
  return axios.get(`${url}/admin/getAllUsers`, adminHeaders)
}

const deleteUserByEmail = (email) => {
  return axios.delete(`${url}/admin/deleteUserByEmail`, { data: { email: email }, ...adminHeaders })
}

const getNumberOfUsers = () => {
  return axios.get(`${url}/admin/numberOfUsers`, adminHeaders)
}
export default {
  getAllUsers,
  getNumberOfUsers,
  deleteUserByEmail
}
