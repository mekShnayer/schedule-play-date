
const initState = {
    test: {
        isTested: false
    }
}

function testReducer(state = initState.test, action) {

    switch (action.type) {
        case 'UPDATE_isTested':
            return {
                ...state,
                isTested: !state.test.isTested
            }
        default: return {
            ...state
        }
    }
}

export default testReducer;

