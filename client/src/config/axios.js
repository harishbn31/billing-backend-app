import Axios from 'axios'
const URL = window.location.origin.includes('localhost') ? "http://localhost:3005" : "/"
const axios = Axios.create({
    baseURL: URL,
    headers: {
        "x-auth": localStorage.getItem('authToken')
    }
})

export default axios