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
            <p>Time Required:{time}</p>
        </div>
    );
};

export default Activity;