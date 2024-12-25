import App from "./App";
import './App.css'
import './calculator.css'
import React from "react";
import Button from "./button.js";
import {useState} from "react";

import anu from './anu.jpg'

function KeyPadComponent(props){
    const [text1, setText ] = useState("")
    const [picture, setPicture] = useState(null)

    const   ClickHandle = (e) => {
        if (e.target.value=="C")
        {
       
            setText("")    
        }
        else if  (e.target.value=="=")
        {
        setText(eval(text1))
        alert(eval(text1))             
        } else if (e.target.value === "Show me") {
            setPicture(anu)
        }
        else if (e.target.value === "Square") {
            setText(text1*text1)
        }
        else
        setText(text1+e.target.value)
      };
    
   
        return (
            <div className="Calculator">
                <div className="screen-row">
                <input type="text" readOnly value= {text1} />
                </div>
                
               
               <div >
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/> 
                </div>

                <div >
                <Button label="1"  ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle}/>
                <Button label="/" ClickHandle={ClickHandle}/>
                </div>

                <div>
                    <Button label="Show me" ClickHandle={ClickHandle} />
                    <img src={picture} alt="" />
                </div>
                <div><Button label="Square" ClickHandle={ClickHandle}/></div>
                
            </div>
        );
    
}
export default KeyPadComponent;