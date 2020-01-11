import axiosWithAuth from '../components/axiosWithAuth'
import history from '../components/history'
import axios from 'axios'

export const USER_REGISTER_START = 'USER_RREGISTER_START'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'
export const USER_LOGIN_START = 'USER_LOGIN_START'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const ADD_TRUCKS_SUCCESS = 'ADD_TRUCKS_SUCCESS'
export const ADD_TRUCKS_FAIL = 'ADD_TRUCKS_FAIL'
export const OPERATOR_ADD_TRUCKS_SUCCESS = 'OPERATOR_ADD_TRUCKS_SUCCESS'
export const OPERATOR_ADD_TRUCKS_FAIL = 'OPERATOR_ADD_TRUCKS_FAIL'
export const FETCH_TRUCKS_FAIL = 'FETCH_TRUCKS_FAIL'
export const FETCH_TRUCKS_SUCCESS = 'FETCH_TRUCKS_SUCCESS'
export const YELP_FETCH_SUCCESS = 'YELP_FETCH_SUCCESS'
export const YELP_FETCH_FAIL = 'YELP_FETCH_FAIL'

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
            userType === 'diner' ? history.push('/diner/dashboard') : history.push('/operator/dashboard')
        })
        .catch(err => {
            dispath({type: USER_REGISTER_FAIL, payload: 'All fields must be filled out'})
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
            userType === 'diner' ? history.push('/diner/dashboard') : history.push('/operator/dashboard')
        })
        .catch(err => {
            dispath({type: USER_LOGIN_FAIL, payload: 'Invalid username or password'})
        })
}

export const addTruck = truck => dispatch => {

    axiosWithAuth()
    .post('/trucks', {
        name: truck.truckname,
        cuisineType: truck.cuisineType,
        operator_id: truck.id,
      })
      .then(res => {
        console.log(res)
        dispatch({type: ADD_TRUCKS_SUCCESS, payload: 'Truck successfully added'})
      })
      .catch(err => {
        console.log(err.message)
        dispatch({type: ADD_TRUCKS_FAIL, payload: 'There was an error adding your truck'})
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

export const fetchOperatorTrucks = url => dispatch => {
    
    axiosWithAuth()
        .get(url)
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCH_TRUCKS_SUCCESS, payload: res.data})
        })
        .catch(err => {
           console.log(err)
        })
}

export const deleteTruck = truck => dispatch => {
    //functionality not working getting 500 error
    axiosWithAuth()
        .delete('/trucks', {
            name: truck.name
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
            console.log()
            dispatch({type: FETCH_TRUCKS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
}

export const getYelpTrucks = (url, location) => dispatch => {
        axios({
            method: 'get',
            url: url,
            params: {
                term: 'food truck',
                location: location
            }, 
            headers: {
                Authorization: 'Bearer qEmilugNtBUc4FfGwgw9LNIpEsBg3etrfOkN09IhKPOJAI21ktTdEPNLPhz8JO6vk49uj7az7rkPV3zp4pGiuUGfFNdkn0XCeBlxzxc5WSeP75FQy9cryEVKz6cXXnYx'
            }
        })
            .then(res => {
                console.log(res)
                dispatch({type: YELP_FETCH_SUCCESS, payload: res.data.businesses})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: YELP_FETCH_FAIL, payload: err.message})
            })
}