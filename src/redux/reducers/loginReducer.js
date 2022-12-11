
const initState = {
    isLogedIn: false,
    user: {
        userName: ''
    }
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
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
        default:
            return {
                ...state
            }
    }
}

export default loginReducer;