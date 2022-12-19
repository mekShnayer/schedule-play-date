import React from "react";
import { Link } from 'react-router-dom'
import LogOut from "../components/LogOut";
import './Navbar.css';


const NavBar = () => {

    return (
        <React.Fragment>
            <div className="navbar">

                {/* <h1>React Router</h1> */}
                <div className="link">
                    <Link to={'/'} className='navbar-brand' >
                        <i className='fa fa-home fa-1x' /> Home</Link>
                </div>
                <div className="link">
                    <Link to={'/about'} className='navbar-brand'> About</Link>
                </div>
                <div className="link">
                    <Link to={'/activity'} className='navbar-brand'> Activities</Link>

                </div>
                <div className="link">
                    <Link to={'/weather'} className='navbar-brand'> Weather</Link>
                </div>
                <div className="link">
                    <Link to={'/profile'} className='navbar-brand'> Profile</Link>
                </div>
                <div className="link">
                    <LogOut />
                </div>
                {/* <Link to={'/pagenotfound'} className='navbar-brand'> Page Not Found</Link> */}
                {/* <Link to={'/contacts/list'} className='navbar-brand'>User list</Link> */}
                {/* <Link to={'/'} className='navbar-brand'>React Router</Link> */}

            </div>

        </React.Fragment>
    )
}

export default NavBar;