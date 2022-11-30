
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
    },
    activities: []
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
                isLogedIn: !state.isLogedIn
            }
            break;
        case 'ADD_ACTIVITY':
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
            break;
        // case 'DELETE_ACTIVITY':
        //     return {
        //         ...state,
        //         activities: [...state.activities, action.payload]
        //     }
        //     break;
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;