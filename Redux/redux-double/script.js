const initialState = {
	counter: 1
}

const DOUBLE = "DOUBLE"

function double(){
	return {
		type: DOUBLE
	}
}


function rootReducer(state=initialState, action) {
	let newState = {...state};
	switch(action.type){
		case "DOUBLE":
			newState.counter = newState.counter * 2
			return newState;
		default:
			return newState;	
	}
}

const store = Redux.createStore(rootReducer);


$(document).ready(() => {
	let state = store.getState();
	$("#display").text(state.counter);
	$("#double-btn").on("click", () => {
		store.dispatch(double());
		state = store.getState();
		$("#display").text(state.counter);
	})
}) 