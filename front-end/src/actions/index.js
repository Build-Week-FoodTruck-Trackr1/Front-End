import axiosWithAuth from '../components/axiosWithAuth'
import history from '../components/history'

export const USER_REGISTER_START = 'USER_RREGISTER_START'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'
export const USER_LOGIN_START = 'USER_LOGIN_START'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const OPERATOR_ADD_TRUCKS_SUCCESS = 'OPERATOR_ADD_TRUCKS_SUCCESS'
export const OPERATOR_ADD_TRUCKS_FAIL = 'OPERATOR_ADD_TRUCKS_FAIL'

export const userRegister = (user) => dispath => {

    const userType = user.type
    
    dispath({type: USER_REGISTER_START})
    console.log(user)

    axiosWithAuth()
        .post('/api/register', {
            type: user.type,
            username: user.username,
            password: user.password,
            currentLocation: user.currentLocation,
            email: user.email
        })
        .then(res => {
            console.log(res.data)
            dispath({type: USER_REGISTER_SUCCESS, payload: res.data})
            localStorage.setItem('token', res.data.token)
            userType == 'diner' ? history.push('/diner/dashboard') : history.push('/operator/dashboard')
        })
        .catch(err => {
            console.log(err.message)
            dispath({type: USER_REGISTER_FAIL, paylod: err.message})
        })
}

export const userLogin = (user) => dispath => {

    const userType = user.type
    
    dispath({type: USER_LOGIN_START})
    console.log(user.type)

    axiosWithAuth()
        .post('/api/login', {
            type: user.type,
            username: user.username,
            password: user.password,
        })
        .then(res => {
            console.log(res.data)
            dispath({type: USER_LOGIN_SUCCESS, payload: res.data})
            localStorage.setItem('token', res.data.token)
            userType == 'diner' ? history.push('/diner/dashboard') : history.push('/operator/dashboard')
        })
        .catch(err => {
            console.log(err.message)
            dispath({type: USER_LOGIN_FAIL, paylod: err.message})
        })
}

export const addTruck = truck => dispatch => {

    axiosWithAuth()
    .post('/trucks', {
        name: truck.truckname,
        cuisineType: truck.cuisineType,
        operator_id: 1,
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err.message)
      })

      axiosWithAuth()
        .get('/trucks/owned')
        .then(res => {
            dispatch({type: OPERATOR_ADD_TRUCKS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: OPERATOR_ADD_TRUCKS_FAIL, payload: err.message})
        })
        
}