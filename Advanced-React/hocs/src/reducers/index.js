import {combineReducers} from 'redux';
import commentsReducer from 'reducers/comments';
import authReducers from 'reducers/auth';

export default combineReducers({
  comments: commentsReducer,
  auth: authReducers
});