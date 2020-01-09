import React from 'react'
import { MainPageContainer } from '../styled-components'
import LoginForm from './LoginForm'
import Header from '../components/headers/Header'

const LoginPage = () => {
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