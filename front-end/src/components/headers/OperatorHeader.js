import React from 'react'
import { OperatorHead, HeroTitle, Navigation, NavLinks } from '../../styled-components'

const OperatorHeader = () => {
    return(
        <OperatorHead>
            <HeroTitle>Food Truck TrackR</HeroTitle>
            <Navigation>
                <NavLinks href='/operator/dashboard'>Home</NavLinks>
                <NavLinks href='/operator/add-trucks'>Add Trucks</NavLinks>
            </Navigation>
        </OperatorHead>
    )
}

export default OperatorHeader