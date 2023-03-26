import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../routing/NavBar";
import './styles/Header.css'
import Logo from "./Logo";
import Menu from "../routing/Menu";
const Header = () => {
    return (
        <div className="header-container">
            <Menu />
            {/* <div className='logo-container'>
                <Logo />
            </div>
            <NavBar /> */}
        </div>
    )
}

export default Header;