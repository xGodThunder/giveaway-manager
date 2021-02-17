import { combineReducers } from 'redux';


import userReducer from './app.reducer';


const rootReducer = combineReducers({

    user: userReducer

});

export default rootReducer;