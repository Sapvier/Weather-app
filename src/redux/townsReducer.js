import {SAVE_TOWN, DELETE_TOWN} from "./types"

const initialState = () => {
    if (JSON.parse(localStorage.getItem('state')) === null) {
        return []
    } else return JSON.parse(localStorage.getItem('state'))
}

export const townsReducer = (state = initialState(), action) => {
      switch (action.type) {
        default:
            return state
        case "SAVE_TOWN": {
            if (state.includes(action.payload)) {
                return state
            }
            else return state.concat([action.payload])
        }
        case "DELETE_TOWN": {
            if (action.payload === 'Kyiv') {
                return state.filter(town => town !== 'Kiev')
            }
            else return state.filter(town => town !== action.payload)
        }
    }
}
