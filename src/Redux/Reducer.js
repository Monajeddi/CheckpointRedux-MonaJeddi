import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO } from './ActionType';
import { todoList } from './State';

const initialState={
    todo: todoList
}

const reducer = (state= initialState, action) => {
    switch(action.type){
        case  ADD_TODO: return {

            ...state,
            todo : [...state.todo, action.payload]
        }
           

        case  DELETE_TODO: return {
            ...state,
            todo : state.todo.filter(todo => todo.id !== action.payload)
        }
            

        case  EDIT_TODO: return {
            ...state,
            todo : state.todo.map( todo => 
                todo.id === action.payload.id ? {...todo , title : action.payload.newTitle} : todo  )
        }
        
        case COMPLETE_TODO: return {
            ...state,
            todo : state.todo.map( todo =>
                todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo )
        }
        default : return state

        }
        
}

export default reducer