import React from 'react';

const Exercise = ({time}) => {
    // console.log(time)
    let total = 0;
    for (const activity of time){
        total = total + parseInt(activity.time)
    }
    return (
        <div>
                <p>Exercise Time: {total} S</p>

        </div>
    );
};

export default Exercise;