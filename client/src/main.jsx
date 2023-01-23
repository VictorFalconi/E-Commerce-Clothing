import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store";
import { Auth0Provider } from '@auth0/auth0-react'
import { PersistGate } from "redux-persist/integration/react";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Auth0Provider domain="dev-5we1lcxsfglip626.us.auth0.com" clientId="eO0wwE57zCEmlLwPdthIFm1vLY11xnrh" redirectUri={window.location.origin}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </PersistGate>
  </Provider>,
);
