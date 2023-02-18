import axios from 'axios'

const serverApi = axios.create({
    //baseURL: ' https://sprout-backend-example.free.beeceptor.com'
    baseURL: 'http://localhost:3000'
})

export default serverApi;