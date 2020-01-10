import React, { useEffect } from 'react'
import axiosWithAuth from '../axiosWithAuth'
import axios from 'axios'

const TestDiner = () => {

    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url:'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
    //         params: {
    //             term: 'food truck',
    //             location: 'Salt Lake City'
    //         }, 
    //         headers: {
    //             Authorization: 'Bearer qEmilugNtBUc4FfGwgw9LNIpEsBg3etrfOkN09IhKPOJAI21ktTdEPNLPhz8JO6vk49uj7az7rkPV3zp4pGiuUGfFNdkn0XCeBlxzxc5WSeP75FQy9cryEVKz6cXXnYx'
    //         }
    //     })
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])

    useEffect(() => {
        axiosWithAuth()
            .get('/trucks')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    })
    

    return(
        <div>
            Hi
        </div>
    )
}

export default TestDiner