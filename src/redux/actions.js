import { CHANGE_BONUS_TYPE, CHANGE_CUR_CATEGORY } from "./types";

export function changeCategoryIndex(id) {
    return {
        type: CHANGE_CUR_CATEGORY,
        data: id
    }
}

export function changeBonusType() {
    return {
        type: CHANGE_BONUS_TYPE
    }
}