
const initState = {

    lists: [
        {
            id: 1,
            list_name: 'shopping list',
            tasks: [
                { id: 1, to_do: 'tomato', isDone: false },
                { id: 2, to_do: 'avocado', isDone: false },
                { id: 3, to_do: 'oranges', isDone: false },
                { id: 4, to_do: 'eggs', isDone: false }
            ]
        },
        {
            id: 2,
            list_name: 'To Do',
            tasks: [
                { id: 1, to_do: 'buy pillow for gidi', isDone: false },
                { id: 2, to_do: 'tidy up maayans clothes', isDone: false },
                { id: 3, to_do: 'fix this list component', isDone: false },
                { id: 4, to_do: 'make a new site for yuvals ideas ', isDone: false }
            ]
        }
    ]
}

const listReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                lists: action.payload
            }
            break;
        case 'DELETE_TASK':
            return {
                ...state,
                lists: action.payload
            }
        case 'ADD_LIST':
            return {
                ...state,
                lists: action.payload
            }
        case 'DELETE_LIST':
            return {
                ...state,
                lists: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default listReducer;
/////
