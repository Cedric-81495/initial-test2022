import React from 'react';
import {FaBars} from 'react-icons/fa';

import {Nav, 
        NavbarContainer, 
        NavLogo, 
        MobileIcon, 
        NavMenu, 
        NavItem, 
        NavLinks,
        Header    
    } 
        from './NavbarElements';

const Navbar = () => {
  return (
    <>  
      
        <Header id='totop'>
            <div className='headercon'><h1>Header</h1></div>
        </Header>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Navbar</NavLogo>
                <MobileIcon>
                    <FaBars></FaBars>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks id='home' to='content'>Content</NavLinks>
                    </NavItem> 
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>

  );
};

export default Navbar;
