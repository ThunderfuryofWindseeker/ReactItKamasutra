import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost } from './redux/state';
import { addMessage } from './redux/state';
import { reRender } from './render';


reRender(state);

// reportWebVitals();
