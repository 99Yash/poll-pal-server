import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './reducers/index';
import { Provider } from 'react-redux';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch({ type: 'auth/fetchUser' });
console.log('user', store.getState().auth.currentUser);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
console.log('stripe key', process.env.REACT_APP_STRIPE_KEY);
console.log('env', process.env.NODE_ENV);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
