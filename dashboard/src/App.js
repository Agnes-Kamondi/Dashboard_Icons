
import React from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container">

<Router>
        <Routes>
        <Route exact path="/" element={ <Sidebar/> } />        

        </Routes>
</Router>
      

    </div>
  );
}
export default App;


