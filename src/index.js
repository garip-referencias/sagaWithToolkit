import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// <0 npm i  @reduxjs/toolkit react-redux redux-saga
// <1  Copiar y pegar todo incluido <3/> y <5/> resolver luego 
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit';

import catsReducer from './catState'      // <3/> aca lo importa en plural en el archivo en singular
import catSaga from './catSaga';          // <5/>


const saga = createSagaMiddleware()
const store = configureStore({
  reducer: {
    cats: catsReducer
  },
  middleware: [saga]                      // <3/>
})

saga.run(catSaga);                        // <5/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// 1>

