import {  ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO} from './ActionType';

export function Add_Todo(payload) {
    return {
        type : ADD_TODO,
        payload 
    }
}

export function Delete_Todo(payload) {
    return {
        type : DELETE_TODO,
        payload 
    }
}

export function Edit_Todo(id, newTitle) {
    return {
        type : EDIT_TODO,
        payload:(id, newTitle)
    }
}

export function Complete_Todo(payload) {
    return {
        type : COMPLETE_TODO,
        payload 
    }
}


