import React from 'react';
import { Logo, MenuBars, Nav, NavMenu, NavMenuLinks, NavBtn } from './NavbarElement';
import { MenuData } from '../../data/MenuData'
import { Button } from '../Button';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <Logo>Kamraj Empresa</Logo>
                <MenuBars onClick={toggle} />
                <NavMenu >
                    {MenuData.map((item, index) => (
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>

                    ))}
                </NavMenu>
                <NavBtn>
                    <Button to='/contact' primary={true}>
                        Contact Us
                    </Button>
                </NavBtn>
            </Nav>

        </>
    )
}

export default Navbar
