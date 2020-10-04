import {FETCH_CARDS, DELETE_CARD, GO_BACK} from "./types"

const initialState = {
    cards: []
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "FETCH_CARDS": {
            if (state.cards.includes(action.payload.name)) {
                return {cards: state.cards.filter(town => town !== action.payload)}
            }
            return {cards: state.cards.concat([action.payload])}
        }
        case "DELETE_CARD": {
            return {cards: state.cards.filter(town => town.name !== action.payload)}
        }
        case "GO_BACK": {
            return {
                cards: []
            }
        }
        case "WRONG_TOWN": {
            return state
        }
    }
}



