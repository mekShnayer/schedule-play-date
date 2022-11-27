
const initState = {
    userLocation: {
        x: '',
        y: ''
    }
}

function userLocationReducer(state = initState.userLocation, action) {

    switch (action.type) {
        case 'UPDATE_USERLOCATION':
            return {
                ...state,
                userLocation: action.userLocation
            }
        default: return {
            ...state
        }
    }
}

export default userLocationReducer;

