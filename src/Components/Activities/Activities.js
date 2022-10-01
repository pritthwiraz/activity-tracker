import React, { useEffect, useState } from 'react';
import "./Activities.css"
import logo from '../../Activity Tracker Logo-.png'
import Activity from '../Activity/Activity';
import Exercise from '../Exercise/Exercise';
import Break from '../Break/Break';


const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [time, setTime] = useState([]);
    const [value, setValue] = useState([]);
    

    useEffect( () =>{
        fetch('activity.json')
        .then(res=> res.json())
        .then(data => setActivities(data))
    }, [])


    const addToList = (activity) => {
        // console.log(activity)
        const newTime = [...time, activity]
        setTime(newTime)
    }
 

    return (        
            <div className='activites'>
            <div className="activity-container">
               <img src={logo} alt="" /> 
                <h2>Select Your Activity</h2>
                <div className='activity'>
                    {
                        activities.map(activity =><Activity 
                            key={activity.id}
                            activity ={activity}
                            addToList = {addToList}
                            ></Activity>)
                    }
                </div>
            </div>
            <div className="activity-details">
                <h2>Pritthwi Raz</h2>
                <div className='person-info'>
                    <div>
                    <p>70 KG</p>
                    <p>Weight</p>    
                    </div>
                    <div>
                    <p>6.1</p>
                    <p>Height</p>    
                    </div> 
                    <div>
                    <p>30 yr</p>
                    <p>Age</p>    
                    </div>  
                </div>
                <div>
                    <h2>Add a Break</h2>
                </div>
                <div className='btn-break'>
                    <button onClick = {e => setValue(e.target.value)} value="10">10S</button>
                    <button onClick = {e => setValue(e.target.value)} value="20">20S</button>
                    <button onClick = {e => setValue(e.target.value)} value="30">30S</button>
                    <button onClick = {e => setValue(e.target.value)} value="40">40S</button>
                </div>
                <div>
                    <h2>Exercise Details</h2>
                    <div className='ex-time'>
                     <Exercise time={time}></Exercise>
                    </div>
                    <div className='ex-time'>
                        {/* <p>Break Time: {value}</p> */}
                        <Break value ={value}></Break>
                    </div>
                </div>
                <button className='completed-activity'><p>Activity Completed</p></button>
            </div>
           
            </div>
    
    );
};

export default Activities;

