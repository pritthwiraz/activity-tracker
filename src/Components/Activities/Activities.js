import React from 'react';
import "./Activities.css"
import logo from '../../Activity Tracker Logo-.png'
const Activity = () => {
    return (
        <div className='activites'>
            <div className="activity-container">
               <img src={logo} alt="" /> 
                <h2>Select Your Activity</h2>
            </div>
            <div className="activity-details">
                <h2>Pritthwi Raz</h2>
            </div>
        </div>
    );
};

export default Activity;