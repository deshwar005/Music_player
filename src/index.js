import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import reducer from './Components/Reducers';



const store = configureStore({
  reducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-5ggffmomqh1wt36o.us.auth0.com"
    clientId="84LbYlfQTNsHKmcOchaps70wkqb5VfVD"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   
  </React.StrictMode>
  </Auth0Provider>
);

reportWebVitals();
