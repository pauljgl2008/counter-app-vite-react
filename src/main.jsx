import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
         {/* {<FirstApp subTitle={123} />} */}
         <CounterApp value={20}/>
    </React.StrictMode>
)