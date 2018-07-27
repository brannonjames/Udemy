const initialState = {
	count: 0
}

function rootReducer(state=initialState, action){
	let newState;
	switch (action.type){
		case "INCREMENT":
			newState = {...state};
			newState.count++
			return newState;
		case "DECREMENT":
			newState = {...state};
			newState.count--;
			return newState;	
		default:
			return state;	
	}
}

const store = Redux.createStore(rootReducer);


$(document).ready(() => {
	let currentState = store.getState();
	$("#counter").text(currentState.count)
	$("#increment").on("click", () => {
		// dispatch action to increment counter
		store.dispatch({
			type: "INCREMENT"
		});
		let currentState = store.getState();
		$("#counter").text(currentState.count)
	})
	$("#decrement").on("click", () => {
		// dispatch action to decrement counter
		store.dispatch({
			type: "DECREMENT"
		});
		let currentState = store.getState();
		$("#counter").text(currentState.count)
	})
})