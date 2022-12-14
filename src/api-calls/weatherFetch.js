
const weatherFetch = (url, userLocation, dispatch, weatherInfo) => {

    // const key = '0de1489e819284a8e68496f5db28f2b6';
    // url = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.x}&lon=${userLocation.y}&appid=${key}&units=metric`;
    //https://openweathermap.org/current#name - the site i use for weather api


    if (userLocation.x != '' && userLocation.y != '') {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data)
            if (data.main.temp != weatherInfo.temperture) {
                dispatch({
                    type: 'UPDATE_WEATHERINFO', weatherInfo:
                    {
                        // image_url: data.main.condition.icon,
                        temperture: data.main.temp,
                        feel_like: data.main.feels_like,
                        // text: data.current.condition.text,
                        // location: data.location.name,
                        // updateTime: data.location.localtime,
                    }
                })
            } else if (data.main.temp == 'undefined') {
                console.log('cant resolve fetch call, temp undefined')
            }
        }).catch(err => console.log('net error', err))
    } else {
        console.log('user location is undefined')
    }
}
export default weatherFetch;




