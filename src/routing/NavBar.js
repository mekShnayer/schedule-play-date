import React from "react";
import { Link } from 'react-router-dom'
import LogOut from "../components/LogOut";
import './Navbar.css';


const NavBar = () => {

    return (
        <React.Fragment>
            <div className="navbar">

                <div className="link">
                    <Link to={'/'} className='navbar-brand' >
                        <i className='fa fa-home fa-1x' /> Home</Link>
                </div>
                <div className="link">
                    <Link to={'/about'} className='navbar-brand'> About</Link>
                </div>
                
                
                <div className="link">
                    <Link to={'/profile'} className='navbar-brand'> Profile</Link>
                </div>
                <div className="link">
                    <LogOut />
                </div>
                

            </div>

        </React.Fragment>
    )
}

export default NavBar;