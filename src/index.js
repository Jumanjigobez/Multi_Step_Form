import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style/style.css';


import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import reducers  from './store/reducers';



const root = createRoot(document.getElementById("root"));

const Store = createStore(reducers);

root.render(
        <Provider store={Store}>
           <App />
        </Provider>
    
)