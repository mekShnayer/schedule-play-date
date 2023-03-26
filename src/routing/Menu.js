import React from "react";
import me from '../me.jpeg'
import Logo from '../components/Logo'
import { useDispatch } from "react-redux";
import './Menu.css'
import { Link } from "react-router-dom";

const Menu = () => {
    const dispatch = useDispatch()
    let subMenu = document.getElementById('subMenu')
    const toggleMenu = () => {
        subMenu.classList.toggle('open-menu')
    }
    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
    }
    return (
        <div className="menu">
            <nav>
                <Logo />
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/#">Contact</Link></li>
                </ul>
                <img src={me} className="user-pic" alt="user-photo" onClick={toggleMenu}></img>

                <div className="sub-menu-wrap" id="subMenu">
                    <div className="sub-menu" >
                        <div className="user-info">
                            <img src={me} alt="user-image"></img>
                            <h2>Shani mekitan</h2>
                        </div>
                        <hr></hr>
                        <a href="#" className="sub-menu-link">
                            <img src={me} alt="help"></img>
                            <p>Edit profile</p>
                            <span>{'>'}</span>
                        </a>
                        <a href="#" className="sub-menu-link">
                            <img src={me} alt="help"></img>
                            <p>setting & privecy</p>
                            <span>{'>'}</span>
                        </a>
                        <a href="#" className="sub-menu-link">
                            <img src={me} alt="help"></img>
                            <p>help & support</p>
                            <span>{'>'}</span>
                        </a>
                        <a href="#" className="sub-menu-link">
                            <img src={me} alt="help"></img>
                            <p onClick={logOut}>logout</p>
                            <span>{'>'}</span>
                        </a>

                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Menu;