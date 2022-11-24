import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initState = {
    weatherInfo: {
        image_url: '',
        temperture: '',
        feel_like: '',
        text: '',
        location: '',
        updateTime: '',
    },
    userLocation: {
        x: '',
        y: ''
    }
}

function rootReducer(state = initState, action) {
    if (action.type == 'GET_STATE') {
        return {
            ...state
        }
    }
    if (action.type == 'UPDATE_USERLOCATION') {
        return {
            ...state,
            userLocation: action.userLocation
        }
    }
    if (action.type == 'UPDATE_WEATHERINFO') {
        return {
            ...state,
            weatherInfo: action.weatherInfo
        }
    }

}

export default rootReducer;