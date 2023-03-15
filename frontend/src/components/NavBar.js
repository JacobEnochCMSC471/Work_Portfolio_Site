import React from "react";
import { Nav, NavLink, NavMenu} from "./NavbarElements"
import "./NavBar.css"
import Header from '../components/Header'

//NavBar component
const Navbar = () => {

const textStyle= {
    color: '#d52f58',
    fontFamily: "Courier New",
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'right'

};

  return (
    <div id='nav'>
      <Nav>
        <NavMenu>
            <div class='link-box'>
                <NavLink to="/">
                    Home
                </NavLink>
            </div>
            <div class='link-box'>
                <NavLink to="/about">
                    About
                </NavLink>
            </div>
            <div class='link-box'>
                <NavLink to="/contact">
                    Contact
                </NavLink>
            </div>
            <div class='link-box'>
                <NavLink to="/portfolio">
                    Portfolios
                </NavLink>
            </div>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;