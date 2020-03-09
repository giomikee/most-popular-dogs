/*
 * Created on Sun Mar 08 2020
 * Author: Gio Justiniano
 * More info: https://github.com/giomikee/
 *
 * Copyright (c) 2020
 */

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


const middleware = [thunk];
const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(...middleware)
	)
);

export default store;
