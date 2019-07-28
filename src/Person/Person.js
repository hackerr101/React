//creating a component - it is just a function that returns html code

import React from 'react';

const person = (props) => { //props consists of all the properties of this component
        return(
            <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
            </div>
        )
    }

export default person;

//in class components - this.props.attribute
//in functional component - props.attribute

//this is a functional presentational or dumb component without logic - use as many of these as possible to as to make your code simple and understandable 