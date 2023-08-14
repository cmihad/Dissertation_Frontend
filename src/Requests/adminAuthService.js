import axios from 'axios'

const url = 'https://api.mihad.site'
const adminHeaders = {
  headers: {
    admintoken: localStorage.getItem('admintoken')
  }
}

const getAllUsers = () => {
  console.log(adminHeaders)
  return axios.get(`${url}/admin/getAllUsers`, adminHeaders.admintoken)
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