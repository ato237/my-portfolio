import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                   <h1>ATO<i className="fab fa-atlassian"></i></h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    <NavBtn>
                    <NavBtnLink to="/Goto">GoTo</NavBtnLink>
                </NavBtn>
                </NavMenu>
             
            </Nav>
        </>
    )
}
