import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    const changToUP=()=>{
        // console.log("Button is cliked")
        let a=text.toUpperCase();
        setText(a)//pass without '',"" while passing variable
        props.showAlert("Changed to Uppercase",'success')
    }

    const handleonchange=(event)=>{
        console.log("hey")
        setText(event.target.value);
    }

    const changeToLo=()=>{
        let a=text.toLowerCase();
        setText(a);
        props.showAlert("Changed to Lowercase",'success')
    }

    const [text,setText]=useState('Enter Text here')//default value of text is Enter Text here
    // text="akhfh" we cant't set like this 
    //setText("ahfaklkj") this is right way but do below return
  return (
    <>
    <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleonchange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary" onClick={changToUP}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-3' onClick={changeToLo}>Convert to Lowercase</button>
    </div>
    <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>
            {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
            {0.008*text.split(" ").length} minutes to read for average person   
        </p>
            <h2>Preview</h2>
        <p>
            {text}
        </p>
    </div>
    </>
  )
}
