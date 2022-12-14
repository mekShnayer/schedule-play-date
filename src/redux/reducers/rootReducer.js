
import { combineReducers } from "redux";
// const initState = {
//     isLogedIn: false,
//     weatherInfo: {
//         image_url: '',
//         temperture: '',
//         feel_like: '',
//         text: '',
//         location: '',
//         updateTime: '',
//     },
//     userLocation: {
//         x: '',
//         y: ''
//     },
//     activities: [],
//     user: {
//         userName: ''
//     },
//     info: {
//         childName: '',
//         age: '',
//         friends: []
//     },
//     timeline: []
// }
import initState from "../state/initState";
//
import activityReducer from "./activityReducer";
import infoReducer from "./infoReducer";
import locationReducer from "./locationReducer";
import loginReducer from "./loginReducer";
import weatherReducer from "./weatherReducer";
import listReducer from "./listReducer";

const rootReducer = combineReducers({ activityReducer, infoReducer, locationReducer, loginReducer, weatherReducer, listReducer })


export default rootReducer;