import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import CounterApp from './hooks/CounterApp';
import ContentLoader from './hooks/ContentLoader';
import ContextExample from './hooks/context/ContextExample';


import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from './hooks/context/ThemeContext';
import CounterAppReducer from './hooks/context/CounterAppReducer';
import LocalStorageExample from './hooks/LocalStorageExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterApp />
    <ContentLoader />
    <ThemeProvider>
      <ContextExample />
    </ThemeProvider>

    
    <CounterAppReducer/>
    <LocalStorageExample/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
