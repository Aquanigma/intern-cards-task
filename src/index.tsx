import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider as StoreProvider } from 'react-redux';
import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <StoreProvider store={store}>
          <App />
      </StoreProvider>
  </React.StrictMode>
);