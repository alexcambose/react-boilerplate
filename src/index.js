import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './assets/styles/index.scss';
import store from './redux/index';

const div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById('app'));
