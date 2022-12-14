
const initState = {
    // lists: {
    //     0: {
    //         list_name: 'list-1',
    //         tasks: [
    //             { id: 1, to_do: 'to do 1', isDone: false },
    //             { id: 2, to_do: 'to do 2', isDone: false }
    //         ]
    //     },
    //     1: {
    //         list_name: 'list-2',
    //         tasks: [
    //             { id: 1, to_do: 'to do 1', isDone: false },
    //             { id: 2, to_do: 'to do 2', isDone: false }
    //         ]
    //     }
    // }
    list: {
        list_name: 'list name',
        tasks: [
            { id: 1, to_do: 'todo1', isDone: false },
            { id: 2, to_do: 'todo1', isDone: false },
            { id: 3, to_do: 'todo1', isDone: false },
            { id: 4, to_do: 'todo1', isDone: false }
        ]
    }
}

const listReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                list: {
                    ...state.list,
                    tasks: [...state.list.tasks, action.payload]
                }
            }
            break;
        case 'DELETE_TASK':
            return {
                ...state,
                list: {
                    ...state.list,
                    tasks: action.payload
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default listReducer;
/////
