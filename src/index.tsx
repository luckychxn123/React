import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FunctionComp from './components/FunctionComp';
import ScssComponent from './components/ScssComponent';
import { ToDoList } from './components/ToDoList';
import ToDoList_Class from './components/ToDoList_class'
import Lifecycle from './components/Lifecycle'
import { TestuseEffect } from './components/TestuseEffect';

import { StopWatch } from './components/frd003 stopwatch'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // frd 001 - 002
  <React.StrictMode>
    {/* <App />
    <FunctionComp />
    <ScssComponent />
    <ToDoList />
    <ToDoList_Class item_c="lucky" />
    <Lifecycle /> */}
    {/* frd 003 */}
    <TestuseEffect />
    <StopWatch />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
