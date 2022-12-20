const onlineCheck = (state, dispatch) => {

    const localState = JSON.parse(localStorage.getItem('state'))
    // console.log('online check local state:',localState)
    const { isLogedIn } = localState.loginReducer
    if (isLogedIn!='undefined') { // if local state != undefined or null
        // console.log('online check!', localState)
        isLogedIn ? dispatch({ type: 'UPDATE_STATE', payload: localState.listReducer.lists }) : console.log('not logged in')
        // localStorage.setItem('state', JSON.stringify(state))
    } else { // if its not defined lets define the local storage.
        localStorage.setItem('state', JSON.stringify(state))
    }
}
export default onlineCheck;