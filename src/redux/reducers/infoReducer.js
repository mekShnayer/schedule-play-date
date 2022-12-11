
const initState = {
    info: {
        childName: '',
        age: '',
        friends: []
    }
}

const infoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CHILD':
            return {
                ...state,
                info: {
                    ...state.info,
                    ...action.payload
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default infoReducer;
/////
