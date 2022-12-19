const onlineCheck = (state, dispatch) => {

    const localState = JSON.parse(localStorage.getItem('state'))
    if (localState) { // if local state != undefined or null
        console.log('online check!', localState)
        localState.loginReducer.isLogedIn ? dispatch({ type: 'UPDATE_STATE' }) : console.log('not logged in')
        // localStorage.setItem('state', JSON.stringify(state))
    } else { // if its not defined lets define the local storage.
        localStorage.setItem('state', JSON.stringify(state))
    }
}
export default onlineCheck;