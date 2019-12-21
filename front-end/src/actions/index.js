import axiosWithAuth from '../components/axiosWithAuth'

export const USER_REGISTER_START = 'USER_LOGIN_START'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'

export const userRegister = user => dispath => {
    
    dispath({type: USER_REGISTER_START})

    axiosWithAuth()
        .post('/register', {
            type: user.type,
            username: user.username,
            password: user.password,
            currentLocation: user.currentLocation,
            email: user.email
        })
        .then(res => {
            console.log(res.data)
            dispath({type: USER_REGISTER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err.message)
            dispath({type: USER_REGISTER_FAIL, paylod: err.message})
        })
}