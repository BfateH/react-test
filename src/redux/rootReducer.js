import { CHANGE_BONUS_TYPE, CHANGE_CUR_CATEGORY } from "./types"

const initialState = {
    curCategoryIndex: 1,
    bonusType: 'take'
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_CUR_CATEGORY:
            return {
                ...state,
                curCategoryIndex: +action.data
            }
        case CHANGE_BONUS_TYPE:
            return {
                ...state,
                bonusType: state.bonusType === 'take' ? 'give' : 'take'
            }
        default:
            return state
    }
}