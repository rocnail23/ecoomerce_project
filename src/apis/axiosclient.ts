import axios from "axios"

const axiosClient = axios.create({
    baseURL:  "http://localhost:4000/api/v1"
})

axiosClient.interceptors.request.use(config => {

    config.headers.set("token",localStorage.getItem("token"))

    return config 
})



export default axiosClient

