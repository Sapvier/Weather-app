import {FETCH_FORECAST} from "./types";

const initialState = {
    forecast: []
}

export const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case FETCH_FORECAST: {
            return {forecast: [action.payload]}
        }
    }
}