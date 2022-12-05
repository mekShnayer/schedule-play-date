import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../routing/NavBar";
import './Header.css'

const Header = () => {
    const userName = useSelector(state => state.user.userName)
    // console.log(userName)
    return (
        <div className="header-container">

            <NavBar />
            <div className="user-greeting">
                Hello {userName}! Great to see you again!
            </div>



        </div>
    )
}

export default Header;