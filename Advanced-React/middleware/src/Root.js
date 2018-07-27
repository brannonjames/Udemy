import React from 'react';
import { Provider } from 'react-redux';
// import reduxPromise from 'redux-promise'
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';

export default ({children, initialState={}}) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );
  return (
    <Provider store={store} >
      {children}
    </Provider>
  )
}