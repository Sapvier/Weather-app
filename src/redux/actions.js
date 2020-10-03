import {FETCH_CARDS, SAVE_TOWN} from "./types";

const API_KEY = '649283e4551d1fc4d7fec58989d9ad6b'

export function fetchCards() {
    return async dispatch => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${API_KEY}`)
        const json = await response.json()
        dispatch({type: FETCH_CARDS, payload: json})
    }
}
export function submitForm(town) {
    return {
        type: SAVE_TOWN,
        payload: town
    }
}
