import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FunctionComp from './components/FunctionComp';
import ScssComponent from './components/ScssComponent';
import { ToDoList } from './components/ToDoList';
import ToDoList_Class from './components/ToDoList_class'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <FunctionComp />
    <ScssComponent />
    <ToDoList />
    <ToDoList_Class item_c="lucky" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
