export default ({dispatch}) => next => action => {
  //check to see if the action has a promise
  //on its payload property
  //if it does, wait for resolve
  //if not then send to next middleware

  if(!action.payload || !action.payload.then){
    return next(action);
  }

  //We want to wait for the promise to resolve
  //then wait for promise to resolve then dispatch
  action.payload.then(function(response){
    const newAction = {...action, payload: response};
    dispatch(newAction);
  })
}


//equivilant to..
// export default function({dispatch}) {
//   return function(next){
//     return function(action){

//     }
//   }
// }    
   

    
  