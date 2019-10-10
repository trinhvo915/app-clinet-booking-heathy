import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { IntlProvider } from "react-intl";

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale="en">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </IntlProvider>
    </Provider>
    ,document.getElementById('root')
);

registerServiceWorker();
