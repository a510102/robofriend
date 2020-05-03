import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

//使store 從reducer 裡面的值 取出來
const logger = createLogger();

const rootReducer = combineReducers({searchRobots,requestRobots} );
const store = 
  createStore(rootReducer, applyMiddleware(thunkMiddleware));


//用Provider 讓store 可以讓App使用 而不用綁死在APP上
ReactDOM.render(
  <Provider store = {store}>
     <App />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
