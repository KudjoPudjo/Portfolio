import React from 'react';
import {createStore} from "redux"
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from "./redux/reducer/rootReducer";

const store = createStore(reducer);
window.store = store



ReactDOM.render(  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode> 
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
