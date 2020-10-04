import {
    DELETE_CARD,
    DELETE_TOWN,
    FETCH_CARDS,
    FETCH_FORECAST,
    GO_BACK,
    SAVE_TOWN,
    SHOW_DETAILED
} from "./types"

const API_KEY = "ceb0d5c3767274f9fbbaf65d07ba82a6"
//'649283e4551d1fc4d7fec58989d9ad6b'
//reserve 2aa83fce662a85a77c173ad8fab4557c

export function fetchCards(town) {
    return async dispatch => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${API_KEY}`)
        if (response.status === 200) {
            const json = await response.json()
            dispatch({type: "FETCH_CARDS", payload: json})
        }
        else {
            alert('There is no such city!')
            dispatch({type: "DELETE_TOWN", payload: town})
        }
    }
}
export function fetchForecast(lat, lon) {
    return async dispatch => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&&appid=${API_KEY}`)
        const json = await response.json()
        dispatch({type: "FETCH_FORECAST", payload: json})
        console.log(json)
    }
}

export function submitForm(town) {
    return {
        type: "SAVE_TOWN",
        payload: town
    }
}
export function deleteTown(town) {
    return {
        type: "DELETE_TOWN",
        payload: town
    }
}
export function deleteCard(town) {
    return {
        type: "DELETE_CARD",
        payload: town
    }
}
export function showDetailed(lat, lon) {
    return {
        type: "SHOW_DETAILED",
        payload: lat, lon
    }
}
export function goBack() {
    return {
        type: "GO_BACK"
    }
}


