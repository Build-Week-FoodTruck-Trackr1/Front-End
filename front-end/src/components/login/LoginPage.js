import React from 'react'
import { MainPageContainer } from '../../styled-components'
import LoginForm from './LoginForm'
import Header from '../headers/Header'

const LoginPage = props => {
    console.log(props.error)
    return(
        <>
            <Header />
            <MainPageContainer>
                <LoginForm />
            </MainPageContainer>
        </>
    )
}

export default LoginPage