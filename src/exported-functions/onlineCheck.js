const onlineCheck = (state, dispatch) => {

    const localState = JSON.parse(localStorage.getItem('state'))
    if (localState) {
        console.log('online check!', localState)
        localState.loginReducer.isLogedIn ? dispatch({ type: 'UPDATE_STATE' }) : console.log('not logged in')
        // localStorage.setItem('state', JSON.stringify(state))
    } else {
        localStorage.setItem('state', JSON.stringify(state))
    }
}
export default onlineCheck;