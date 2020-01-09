import React from 'react'
import { Link } from 'react-router-dom';
import { HeaderContainer, HeroTitle } from '../styled-components'

const Header = () => {
    return(
        <HeaderContainer>
            <HeroTitle>Food Truck TrackR</HeroTitle>
            <Link to='/operator/dashboard'>Home</Link>
        </HeaderContainer>
    )
}

export default Header