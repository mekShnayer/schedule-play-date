

const initState = {
    activities: [],
    timeline: []
}

const activityReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DONE_ACTIVITY':
            return {
                ...state,
                timeline: [...state.timeline, action.payload]
            }
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
        case 'CLEAR_LOG_HISTORY':
            return {
                ...state,
                timeline: []
            }
        default:
            return {
                ...state
            }
    }
}

export default activityReducer;
/////
