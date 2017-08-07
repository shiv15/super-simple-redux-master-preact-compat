import React from 'preact-compat';
import ReactDOM from 'preact-compat';
import { Provider } from 'preact-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {storeGlobal} from './store'

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = storeGlobal()

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
store.subscribe(() =>
	console.log(store.getState())
)



ReactDOM.render(
	<Provider store={store}>
    	<App />
  	</Provider>
	,document.getElementById('root'));


registerServiceWorker();
