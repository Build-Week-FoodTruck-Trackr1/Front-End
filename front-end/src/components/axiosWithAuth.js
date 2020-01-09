import axios from 'axios'

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    
    return axios.create({
        baseURL: 'https://build-foodtruck-trackr1.herokuapp.com/api',
        headers: {
            Authorization: `${token}`
        }
    })
}

export default axiosWithAuth