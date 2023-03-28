import React from "react";
import me from '../me.jpeg'
import Logo from '../components/Logo'
import { useDispatch } from "react-redux";
import './SideMenu.css'
import { Link } from "react-router-dom";

const SideMenu = () => {

    return (
        <div className="">

            <div className="side-menu-wrap" id="sideMenu">
                <div className="side-menu" >

                    <Link to='/' className="side-menu-link">
                        <img src={me} alt="user-image" className="icons"></img>
                        <p>Home</p>
                    </Link>

                    <Link to='/profile' className="side-menu-link">
                        <img src={me} alt="user-image" className="icons"></img>
                        <p>Shani mekitan</p>
                    </Link>
                    <Link to='/about' className="side-menu-link">
                        <img src={me} alt="user-image" className="icons"></img>
                        <p>About</p>
                    </Link>
                    {/*  */}
                    <hr></hr>
                    {/*  */}
                    <Link to='/lists' className="side-menu-link">
                        <img src={me} alt="help" className="icons"></img>
                        <p>Lists</p>
                    </Link>

                    <Link to='/activities' className="side-menu-link">
                        <img src={me} alt="help" className="icons"></img>
                        <p>Activities</p>
                    </Link>

                    <Link to='/' className="side-menu-link">
                        <img src={me} alt="help" className="icons"></img>
                        <p>Friends</p>
                    </Link>

                    <Link to='/' className="side-menu-link">
                        <img src={me} alt="help" className="icons"></img>
                        <p onClick={() => { }}>Chat</p>
                    </Link>

                    <Link to='/' className="side-menu-link">
                        <img src={me} alt="help" className="icons"></img>
                        <p onClick={() => { }}>.. food recipes, locations.. etc</p>
                    </Link>


                </div>
            </div>

        </div>
    )
}

export default SideMenu;