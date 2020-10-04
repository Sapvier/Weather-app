import {combineReducers} from "redux"
import {cardsReducer} from "./cardsReducer"
import {townsReducer} from "./townsReducer"
import {detailedReducer} from "./detailedReducer"
import {forecastReducer} from "./forecastReducer"

export const rootReducer = combineReducers({
    cardsReducer,
    townsReducer,
    detailedReducer,
    forecastReducer
})