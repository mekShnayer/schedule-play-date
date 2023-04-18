
import { combineReducers } from "redux";

import activityReducer from "./activityReducer";
import infoReducer from "./infoReducer";
import locationReducer from "./locationReducer";
import loginReducer from "./loginReducer";
import weatherReducer from "./weatherReducer";
import listReducer from "./listReducer";

const rootReducer = combineReducers({ activityReducer, infoReducer, locationReducer, loginReducer, weatherReducer, listReducer })


export default rootReducer;