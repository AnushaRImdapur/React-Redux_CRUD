import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import rootReducer from "./Redux/reducer"
import App from './App';
const store=createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


