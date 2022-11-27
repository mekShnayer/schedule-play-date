
const initState = {
    weatherInfo: {
        image_url: '',
        temperture: '',
        feel_like: '',
        text: '',
        location: '',
        updateTime: '',
    }
}
function weatherReducer(state = initState.weatherInfo, action) {
    switch (action.type) {
        case 'UPDATE_WEATHERINFO':
            return {
                ...state,
                weatherInfo: action.weatherInfo
            }
        default: return {
            ...state
        }
    }
}
export default weatherReducer;