import React from 'react'
import { HeaderContainer, Logo, NavLinks } from '../../styled-components'

const Header = () => {
    return(
        <HeaderContainer>
            <NavLinks href='https://heuristic-swanson-2ca27f.netlify.com/'>
                <Logo src='https://github.com/agyin3/images/blob/master/food-truck-trackr/logo.png?raw=true' />
            </NavLinks>
        </HeaderContainer>
    )
}

export default Header