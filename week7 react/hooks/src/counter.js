import './App.css';
 
import React from 'react';
import {useState} from 'react';

function UpdateCounter(){
    const [count,setCount]=useState(0);

    const clickEventHandler = () =>{
        setCount(count +1);
    };
    return(
<div>
    <form>
        <h1>Click Me : {count}</h1>
        <button color='blue'  type='button' onClick={clickEventHandler}>
            Click Here To Update
        </button>
    </form>
</div>


    );
};

export default UpdateCounter;