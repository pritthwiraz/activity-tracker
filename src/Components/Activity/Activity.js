import React from 'react';
import "./Activity.css"

const Activity = (props) => {
    const {picture, name, description, age, time} = props.activity
   
    return (
        <div className='activity-cart'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>For Age: {age}</p>
            <p>Time Required:{time}S</p>
            <button onClick={() => {props.addToList(props.activity)}} className='btn-list'><p>Add To List</p></button>            
                       
        </div>

    );
};

export default Activity;