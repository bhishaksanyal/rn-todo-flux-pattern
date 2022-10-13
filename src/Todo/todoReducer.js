import { ACTION_TYPES } from "./todoActionTypes"

/**
 * Todo Object Structure
 * 
 * {
 *      id: UUID
 *      text: String
 *      isComplete: Boolean
 * }
 */

export const INITIAL_STATE = []

export const todoReducer = (state, action) => {
    switch(action.type) {
        case ACTION_TYPES.ADD_TODO: 
            return [...state, action.payload]
        case ACTION_TYPES.DELETE_TODO:
            return state.filter((item) => item.id != action.payload)
        case ACTION_TYPES.TOGGLE_TODO: {
            const newTodos = state.map((todo) => {
                if (todo.id == action.payload) {
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo
            })
            return newTodos
        }
            
        default:
            return state
    }
}