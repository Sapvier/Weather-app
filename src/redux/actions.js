import {DELETE_CARD, DELETE_TOWN, FETCH_CARDS, SAVE_TOWN} from "./types";

const API_KEY = "ceb0d5c3767274f9fbbaf65d07ba82a6"
//'649283e4551d1fc4d7fec58989d9ad6b'
//reserve 2aa83fce662a85a77c173ad8fab4557c

export function fetchCards(town) {
    return async dispatch => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${API_KEY}`)
        if (response.status === 200) {
            const json = await response.json()
            dispatch({type: FETCH_CARDS, payload: json})
        }
        else alert('Указанный Вами город не найден')
    }
}



export function submitForm(town) {
    return {
        type: SAVE_TOWN,
        payload: town
    }
}
export function deleteTown(town) {
    return {
        type: DELETE_TOWN,
        payload: town
    }
}
export function deleteCard(town) {
    return {
        type: DELETE_CARD,
        payload: town
    }
}
