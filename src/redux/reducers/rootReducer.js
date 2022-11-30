
const initState = {
    isLogedIn: false,
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
    switch (action.type) {
        case 'UPDATE_USERLOCATION':
            return {
                ...state,
                userLocation: action.userLocation
            }
            break;
        case 'UPDATE_WEATHERINFO':
            return {
                ...state,
                weatherInfo: action.weatherInfo
            }
            break;
        case 'TOGGLE_LOGIN':
            return {
                ...state,
                isLogedIn: !state.isLogedIn //this should toggle the log in
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;