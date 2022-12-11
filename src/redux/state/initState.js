const initState = {
    isLogedIn: false,
    weatherInfo: {
        image_url: '',
        temperture: '',
        feel_like: '',
        text: '',
        location: '',
        updateTime: '',
    },
    userLocation: {
        x: '',
        y: ''
    },
    activities: [],
    user: {
        userName: ''
    },
    info: {
        childName: '',
        age: '',
        friends: []
    },
    timeline: []
}

export default initState;