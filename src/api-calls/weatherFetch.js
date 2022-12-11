
const weatherFetch = (url, userLocation, dispatch, weatherInfo) => {

    if (userLocation.x != '' && userLocation.y != '') {
        fetch(url).then(res => res.json()).then(data => {
            if (data.current.temp_c != weatherInfo.temperture) {
                dispatch({
                    type: 'UPDATE_WEATHERINFO', weatherInfo:
                    {
                        image_url: data.current.condition.icon,
                        temperture: data.current.temp_c,
                        feel_like: data.current.feelslike_c,
                        text: data.current.condition.text,
                        location: data.location.name,
                        updateTime: data.location.localtime,
                    }
                })
            } else if (data.current.temp_c == 'undefined') {
                console.log('cant resolve fetch call, temp undefined')
            }
        }).catch(err => console.log('net error', err))
    } else {
        console.log('user location is undefined')
    }
}
export default weatherFetch;




