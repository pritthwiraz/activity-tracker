import React, { useEffect, useState } from 'react';
import "./Activities.css"
import logo from '../../Activity Tracker Logo-.png'
import Activity from '../Activity/Activity';


const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect( () =>{
        fetch('activity.json')
        .then(res=> res.json())
        .then(data => setActivities(data))
    }, [])
    return (
        <div className='activites'>
            <div className="activity-container">
               <img src={logo} alt="" /> 
                <h2>Select Your Activity</h2>
                <div className='activity'>
                    {
                        activities.map(activity =><Activity 
                            key={activity.id}
                            activity ={activity}>    
                            </Activity>)
                    }
                </div>
            </div>
            <div className="activity-details">
                <h2>Pritthwi Raz</h2>
            </div>
        </div>
    );
};

export default Activities;