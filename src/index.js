import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, {useState} from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';

import Food from './components/pages/food'
import Home from './components/pages/home'
import News from './components/pages/news'
import Wine from './components/pages/wine'
import Header from './components/pages/header'
import Footer from './components/pages/footer'

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/wine' element={<Wine/>}/>
      <Route path='/dining' element={<Food/>}/>
      <Route path='/news' element={<News/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
