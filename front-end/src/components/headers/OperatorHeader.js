import React from 'react'
import history from '../history'
import { OperatorHead, HeroTitle, Navigation, NavLinks } from '../../styled-components'

const OperatorHeader = () => {
    const signOut = () => {
        localStorage.removeItem('reduxState');
        localStorage.removeItem('token')
        localStorage.removeItem('type')
        history.push('/login')
    }

    return(
        <OperatorHead>
            <HeroTitle>Food Truck TrackR</HeroTitle>
            <Navigation>
                <NavLinks href='/operator/dashboard'>Home</NavLinks>
                <NavLinks href='/operator/add-trucks'>Add Trucks</NavLinks>
                <NavLinks onClick={signOut}>Sign Out</NavLinks>
            </Navigation>
        </OperatorHead>
    )
}

export default OperatorHeader