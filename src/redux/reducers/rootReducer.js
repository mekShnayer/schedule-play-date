
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
    activities: [],
    user: {
        userName: ''
    },
    info: {

    }
}

function rootReducer(state = initState, action) {
    switch (action.type) {
        case 'UPDATE_STATE':
            return {
                ...state,
                ...action.payload
            }
            break;
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
        case 'LOGIN':
            return {
                ...state,
                isLogedIn: true,
                user: {
                    ...state.user,
                    userName: action.payload
                }
            }
            break;
        case 'LOGOUT':
            return {
                ...state,
                isLogedIn: false
            }
            break;
        case 'ADD_ACTIVITY':
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
            break;
        case 'DELETE_ACTIVITY':
            return {
                ...state,
                activities: action.activities
            }
            break;
        case 'ADD_CHILD':
            return {
                ...state,
                info: {
                    child: {
                        ...action.payload
                    }
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;