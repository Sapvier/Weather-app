import { combineReducers } from 'redux'
import {cardsReducer} from "./cardsReducer";
import {townsReducer} from "./townsReducer";

export const rootReducer = combineReducers({
    cardsReducer,
    townsReducer
})