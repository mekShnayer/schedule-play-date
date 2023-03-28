import React from "react";
import List from "../components/lists/List";
import { useDispatch, useSelector } from "react-redux";
import PlusMenu from '../routing/PlusMenu'
import './Testing.css'
import SideMenu from "../routing/SideMenu";
const Testing = () => {


    return (
        <div >
            {/* <PlusMenu/> */}
            <SideMenu />
        </div>
    )
}

export default Testing;