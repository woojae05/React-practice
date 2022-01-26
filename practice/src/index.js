import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import {StoreProvider} from "./components/states/context";
import {RootStore} from "./components/states/rootStore";

const rootStore = new RootStore();

ReactDOM.render(
  <React.StrictMode>
  <StoreProvider value={rootStore}>
    <App />
  </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

