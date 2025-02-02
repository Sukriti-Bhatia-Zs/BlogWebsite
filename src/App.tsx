import React from 'react';
import './App.css';
import Home from './Blogs/Home.tsx';
import Hook from './Blogs/Hook.tsx';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/useEffect" element={<Hook/>}/>
    </Routes>
  );
}

export default App;
