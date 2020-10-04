import {SHOW_DETAILED} from './types'

const initialState = {}

export const detailedReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case SHOW_DETAILED: {
            return action.payload
        }
    }
}
