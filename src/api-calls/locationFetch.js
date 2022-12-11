

const locationFetch = (userLocation, dispatch) => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            if (position.coords.latitude != userLocation.x) {
                dispatch({
                    type: 'UPDATE_USERLOCATION', userLocation: {
                        x: position.coords.latitude,
                        y: position.coords.longitude
                    }
                })
            }
        })

    } else {
        console.log("location Not Available");
    }
}

export default locationFetch;