const initialState = {
	todos: [],
	id: 0
}

function rootReducer(state=initialState, action){
	let newState = {...state}
	switch(action.type){
		case "ADD_TODO":
			newState.id++
			return {
				...newState,
				todos: [...newState.todos, {task: action.task, id: newState.id}]
			};
		case "REMOVE_TODO":
			return {
				...state,
				todos: state.todos.filter(t => t.id !== action.id)
			};
		default:
			return state;

	}
}

const store = Redux.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


$(document).ready(() => {
	$("ul").on("click", "button", e => {
		store.dispatch({
			type: "REMOVE_TODO",
			id: Number($(e.target).attr("id"))
		});
		$(e.target).parent().remove();
	})

	$("form").on("submit", e => {
		e.preventDefault();
		let newTask = $("#task").val();
		store.dispatch({
			type: "ADD_TODO",
			task: newTask
		});
		let currentState = store.getState()
		let $newLi = $("<li>", {
			text: newTask
		});
		let $newButton = $("<button>", {
			text: "X",
			id: currentState.id
		})
		$newLi.append($newButton);
		$("#todos").append($newLi);
		$("form").trigger("reset");
	})
	
})