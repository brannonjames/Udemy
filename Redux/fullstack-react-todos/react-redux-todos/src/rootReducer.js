import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, GET_TODOS } from './actionCreators';

const initialState = {
	todos: []
}


export default function rootReducer(state=initialState, action){
	let newState = {...state};
	switch(action.type){
		case GET_TODOS:
			return {...state, todos: action.data}
		case ADD_TODO:
			return {...state, todos: [...state.todos, action.todo]}
		case REMOVE_TODO:
			return {
				...newState,
				todos: newState.todos.filter(t => t._id !== action.id)
			}
		case TOGGLE_TODO:
			let todos = newState.todos.map(t => t._id === action.id ?
				{...t, completed: !t.completed} :
				t
			)
			return {
				...newState,
				todos
			}	
		default: 
			return state		
	}
}