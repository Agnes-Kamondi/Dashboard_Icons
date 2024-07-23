import React from "react";
import "./index.css"

import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TeachersOverview = () => {

    const data = [
      { name: 'Jan', value1: 400, value2: 240 },
      { name: 'Feb', value1: 300, value2: 139 },
      { name: 'Mar', value1: 200, value2: 980 },
      { name: 'Apr', value1: 278, value2: 390 },
      { name: 'May', value1: 189, value2: 480 },
    ];
  
    return (
     
     <div className="teachers-overview">
         <div className="search-bar">
          <input type="text" placeholder="Search for teacher's name" />
          <button><img src="Assets/searchicon.png" className="search-icon"/></button>
         </div> 
  
      <div className="course-info">
          <div className="teacher-info">
           <img src= "Assets/profileavatar.svg" className='avatar' alt='Profile picture'/> 
          <h2>Kimathi</h2>
          </div>
  
           <div className="info-box">
            <h3>Completed <br></br>Courses</h3>
           </div>
  
           <div className="info-box">
            <h3>Ongoing <br></br>Courses</h3>
           </div>
  
           <div className="info-box">
            <h3>Completed Assessments</h3>
           </div>
  
      </div>
  
      <div className="chart-container">
          <div className="chart">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <Line type="monotone" dataKey="value1" stroke="#ff7300" strokeWidth={2} />
                <Line type="monotone" dataKey="value2" stroke="#387908" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
      </div> 
    </div>
     
    
    );
  };
  
  export default TeachersOverview;