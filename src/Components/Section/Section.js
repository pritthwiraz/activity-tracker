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
            <p> 1. By Props the Data is passed from one component to another. 
                2. It is Immutable (cannot be modified).
                3. Props can be used with state and functional components.
                4. Props are read-only.</p>
            <h4>useState</h4>
            <p>The React useState Hook allows us to track state in a function component.State 
generally refers to data or properties that need to be tracking in an application.</p>
            <p>1. By State the Data is passed within the component only.
2. It is Mutable ( can be modified).
3. State can be used only with the state components.
4. State is both read and write.</p>
        </div>
        <div className="topic">
            <h3>Use of useEffect other than Data Loading?</h3>
            <p>The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, 
and timers.</p>
        <h4>useEffect use cases</h4>
            <p>
            1. Running on state change: validating input field
            2. Running on state change: live filtering
            3. Running on state change: trigger animation on new array value
            4. Running on props change: update paragraph list on fetched API data update
            5. Running on props change: updating fetched API data to get BTC updated price
            </p>
        </div>
        </div>
    );
};

export default Section;