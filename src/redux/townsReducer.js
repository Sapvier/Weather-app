import {SAVE_TOWN} from './types'

const initialState = []
export const townsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case SAVE_TOWN: {
            return state.concat([action.payload])
        }
    }
}
//два разных стейта