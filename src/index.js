import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Localization from './components/LayoutComponents/Localization';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { getStore } from './store';

const store = getStore();

const app = (
  <Provider store={store}>
    <Localization>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Localization>

  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
