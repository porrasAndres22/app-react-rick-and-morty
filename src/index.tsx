import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalApp from './GlobalApp';
import LoginApp from './LoginApp';
import EpisodesApp from './EpisodesApp';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlobalApp/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
