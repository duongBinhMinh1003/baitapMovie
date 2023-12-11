import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shoeReducer } from './shoeredux/redux/reducer';
import { configureStore } from '@reduxjs/toolkit';
import MovieSlice from './bookTicket/MovieSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
let store = configureStore({
  reducer:{
    movieSlice : MovieSlice,
  }
})
root.render(
  <Provider store={store}>
    <App />


  </Provider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
