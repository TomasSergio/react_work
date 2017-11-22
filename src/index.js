import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';


let store = createStore(reducer);
let Cards = store.getState();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export {store, Cards}
