import axios from 'axios'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      app._context.config.globalProperties.$toast.open({
        message: `HTTP Error (${error.response.status}): ${error.response.data.message}`,
        type: 'error'
      })
    } else if (error.request) {
      app._context.config.globalProperties.$toast.open({
        message: 'No response from server.',
        type: 'error'
      })
    } else {
      app._context.config.globalProperties.$toast.open({
        message: `Error: ${error.message}`,
        type: 'error'
      })
    }
    return Promise.reject(error)
  }
)
