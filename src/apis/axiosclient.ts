import axios from "axios"

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_URL_API
})

axiosClient.interceptors.request.use(config => {

    config.headers.set("token",localStorage.getItem("token"))

    return config 
})



export default axiosClient

