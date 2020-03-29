import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3005/api',
    headers: {
        "x-auth": localStorage.getItem('authToken')
    }
})

export default axios