import React from 'react';
import {  Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <>
      <h1>hello</h1>

      <Routes>
        <Route path='/' exact element={<Login/>} />
        {/* <Route path='/' exact element={} />
        <Route path='/' exact element={} /> */}
      </Routes>
    </>
  );
}

export default App;
