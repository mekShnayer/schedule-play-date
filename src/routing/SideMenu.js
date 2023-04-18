import React from "react";
import me from '../me.jpeg'
import './SideMenu.css'
import { Link } from "react-router-dom";
import home_icon from './icons/home-icon.png'
import list_icon from './icons/icon-to-do-list.png'
import activity_icon from './icons/icons-activities.png'
import friends_icon from './icons/friends.png'
import chat_icon from './icons/chat.png'
import about_icon from './icons/about_icon.png'

const SideMenu = () => {

    return (
        <div className="">

            <div className="side-menu-wrap" id="sideMenu">
                <div className="side-menu" >

                    <Link to='/' className="side-menu-link">
                        <img src={home_icon} alt="user-image" className="icons"></img>
                        <p>Home</p>
                    </Link>
                    <Link to='/about' className="side-menu-link">
                        <img src={about_icon} alt="user-image" className="icons"></img>
                        <p>About</p>
                    </Link>
                    <Link to='/profile' className="side-menu-link">
                        <img src={me} alt="user-image" id="personal-pic" className="icons"></img>
                        <p>Shani mekitan</p>
                    </Link>

                    {/*  */}
                    <hr></hr>
                    {/*  */}
                    <Link to='/lists' className="side-menu-link">
                        <img src={list_icon} alt="help" className="icons"></img>
                        <p>Lists</p>
                    </Link>

                    <Link to='/activities' className="side-menu-link">
                        <img src={activity_icon} alt="help" className="icons"></img>
                        <p>Activities</p>
                    </Link>
{/* 
                    <Link to='/' className="side-menu-link">
                        <img src={friends_icon} alt="help" className="icons"></img>
                        <p>Friends</p>
                    </Link>

                    <Link to='/' className="side-menu-link">
                        <img src={chat_icon} alt="help" className="icons"></img>
                        <p onClick={() => { }}>Chat</p>
                    </Link>

                    <Link to='/' className="side-menu-link">
                        <img src={me} alt="help" className="icons"></img>
                        <p onClick={() => { }}>.. food recipes, locations.. etc</p>
                    </Link> */}


                </div>
            </div>

        </div>
    )
}

export default SideMenu;