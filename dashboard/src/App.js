import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import TeachersOverview from './TeachersOverview';
function App() {
  return (
    <Router>
      <div>
        <Sidebar/>
        <Routes>
          <Route path='/teachersoverview' element= {<TeachersOverview/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;