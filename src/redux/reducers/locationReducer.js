
const initState = {
    userLocation: {
        x: '',
        y: ''
    },
}

const locationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_USERLOCATION':
            return {
                ...state,
                userLocation: action.userLocation
            }
            break;
        default:
            return {
                ...state
            }
    }
}

export default locationReducer;
/////
