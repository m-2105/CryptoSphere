import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import 'antd/dist/antd.css'
reactDom.render(
    <Router>
        < Provider store={store}>
        <App />
        </Provider>
    </Router>, 
    document.getElementById('root'));