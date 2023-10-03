import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom";
import router from './routes/index'
import '../src/index.css'
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('erto')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
