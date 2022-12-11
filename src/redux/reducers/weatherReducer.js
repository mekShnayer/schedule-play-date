
const initState = {
    weatherInfo: {
        image_url: '',
        temperture: '',
        feel_like: '',
        text: '',
        location: '',
        updateTime: '',
    },
}

const weatherReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_WEATHERINFO':
            return {
                ...state,
                weatherInfo: action.weatherInfo
            }
            break;
        default:
            return {
                ...state
            }
    }
}

export default weatherReducer;
/////
