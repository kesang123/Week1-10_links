import './App.css';

import React from 'react';
import{useState, useEffect} from 'react';

import Happy from './Happy.png';
import Love from './Love.png';
import Like from './Like.png';
import sad from './sad.png';

function EmojiCounter(props){
    const [count, setCount] = useState(0);
    const[pic, setPic] = useState(Happy);

    useEffect(() =>{
        if (props.pic === 'Happy'){
            setPic(Happy);
        }
        else if(props.pic === 'Love') {
            setPic(Love);
        }
        else if(props.pic === 'Like') {
            setPic(Like);
        }
        else if(props.pic === 'sad') {
            setPic(sad);
        }
    });

const clickHandle = () => {
    setCount(count + 1);
};

return (
    <div>
        <p>
            {props.pic}<span></span>
            <button onClick={clickHandle} > 
                Counter : {count}
                <img src={pic} alt=''/>

            </button>
        </p>
    </div>
);
};
export default EmojiCounter;