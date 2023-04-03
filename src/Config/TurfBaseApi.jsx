import axios from 'axios'

const USER_BASE_URL=    `http://localhost:${process.env.REACT_APP_BACKENDPORT}/turf`

const TurfBaseApi =axios.create({
    baseURL:USER_BASE_URL
})

export default TurfBaseApi