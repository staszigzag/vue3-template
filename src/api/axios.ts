import axios from 'axios'

const axiosApi = axios.create({
  baseURL: import.meta.env.VUE_APP_API_BASE_URL
  // withCredentials: true
})

export default axiosApi
