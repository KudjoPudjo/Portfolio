import {ADD_TO_CARD,REMOVE_FROM_CARD, ADD_QUALITY, CHANGE_CART_CONTENT} from "../actions/actions_1"

export const addToCard = function(content){
    return {
        type: ADD_TO_CARD,
        content
    }
}
export const removeFromCard = function(content){
    return {
        type: REMOVE_FROM_CARD,
        content
    }
}
export const addQuality = function(content){
    return {
        type: ADD_QUALITY,
        content
    }
}
export const changeCartContent = function(content){
    return {
        type: CHANGE_CART_CONTENT,
        content
    }
}



