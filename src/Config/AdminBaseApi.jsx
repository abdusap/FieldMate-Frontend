import axios from 'axios'

const USER_BASE_URL=    `${process.env.REACT_APP_BACKENDPORT}/admin`

const AdminApi =axios.create({
    baseURL:USER_BASE_URL
})

export default AdminApi