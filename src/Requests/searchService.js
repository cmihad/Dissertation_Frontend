import axios from 'axios'

// const url = 'https://api.mihad.site'
const url = 'http://localhost:5000'

const getTescoData = (data) => {
  const ts = `https://www.tesco.com/groceries/en-GB/search?query=${data}&page=1&count=100`
  return axios.post(`${url}/search/tesco`, { url: ts })
}

const getSuperDrugData = (data) => {
  const sd = `https://www.superdrug.com/search/${data}`
  return axios.post(`${url}/search/superdrug`, { url: sd })
}

export default {
  getSuperDrugData,
  getTescoData
}
