import React from 'react'
import { MainPageContainer } from '../styled-components'
import SignupForm from './SignupForm'
import Header from '../components/headers/Header'

const SignupPage = () => {
    return(
        <>
            <Header />
            <MainPageContainer>
                <SignupForm />
            </MainPageContainer>
        </>
    )
}

export default SignupPage