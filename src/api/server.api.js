import axios from 'axios'

const serverApi = axios.create({
    baseURL: 'https://flight-options-howdy-api.onrender.com'
})

export default serverApi;