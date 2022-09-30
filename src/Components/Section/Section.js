import React from 'react';
import './Section.css'

const Section = () => {
    return (
        <div className='section-top'>
            <h1>Questions and Answer Section</h1>
            <div className='topic'>            
            <h3>How does React Work?</h3>
            <p>ReactJS is one of the most popular JavaScript libraries for mobile and web 
application development. Created by Facebook, React contains a collection of 
reusable JavaScript code snippets used for user interface (UI) building called 
components. One of the biggest advantages of using React is that you can infuse 
HTML code with JavaScript.</p>
            <p>React creates a VIRTUAL DOM in memory.Instead of manipulating the browser's DOM 
directly, React creates a virtual DOM in memory, where it does all the necessary 
manipulating, before making the changes in the browser DOM.React only changes what
needs to be changed.React finds out what changes have been made, and changes only 
what needs to be changed.</p>
            </div>
        <div className='topic'>
            <h3>Difference between Props and State?</h3>
            <h4>Props</h4>
            <p>props stands for properties.Props are arguments passed into React components.
Props are passed to components via HTML attributes.React Props are like function 
arguments in JavaScript and attributes in HTML.</p>
            
        </div>
        </div>
    );
};

export default Section;