// import React from "react";
// import me from '../me.jpeg'
// import Logo from '../components/Logo'
// import { useDispatch } from "react-redux";
// import './PlusMenu.css'
// import { Link } from "react-router-dom";
// import plusIcon from './icon-plus.png'
// import icontToDoList from './icon-to-do-list.png'
// import iconsActivities from './icons-activities.png'


// const PlusMenu = () => {
//     let subPlusMenu = document.getElementById('subPlusMenu')
//     const toggleMenu = () => {
//         console.log('clicked')
//         subPlusMenu.classList.toggle('open-menu')
//     }
    
//     return (
//         <div className="plus-menu">
//             <img src={plusIcon} className="plus-icon" alt="plus-icon" onClick={toggleMenu}></img>

//             <div className="plus-menu-wrap" id="subPlusMenu">
//                 <div className="sub-menu" >
                    
//                     {/* <hr></hr> */}
//                     <a href="#" className="sub-menu-link">
//                         <img src={icontToDoList}></img>
//                         <p>Lists</p>
//                         <span>{'>'}</span>
//                     </a>
//                     <a href="#" className="sub-menu-link">
//                         <img src={iconsActivities} alt="help"></img>
//                         <p>Activities</p>
//                         <span>{'>'}</span>
//                     </a>
//                     {/* <a href="#" className="sub-menu-link">
//                         <img src={me} alt="help"></img>
//                         <p>Friends</p>
//                         <span>{'>'}</span>
//                     </a> */}
                    

//                 </div>
//             </div>


//         </div>
//     )
// }

// export default PlusMenu;