import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { App } from 'components/App';
import { store } from './redux/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/toolkit">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>   
  </React.StrictMode>
);

