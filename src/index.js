import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor  } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import './fonts.css'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/my-portfolio">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);