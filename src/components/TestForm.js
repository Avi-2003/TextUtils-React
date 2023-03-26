import React, { useState } from 'react';


export default function TestForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase Was Clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLowClick = () => {
        // console.log("Uppercase Was Clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

    }

    const handleClear = () => {
        // console.log("Uppercase Was Clicked"+text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleard!", "success")

    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    const handleCopy= ()=> {
        var text = document.getElementById("myForm");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success")

    }
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success")
        
    }

    const [text, setText] = useState('')
    //setText('New Text');
    return (
        <>
            <div className='container'  style={{color:props.mode==='dark' ? 'white' : '#042743 '}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? 'grey' : 'white', color:props.mode==='dark' ? 'white' : 'balck ' }} id="myForm" rows="8"></textarea>
                </div>
                <button className="btn btn-primary m-2" onClick={handleUpClick}>Conver to Uppercase</button>
                <button className="btn btn-primary m-2" onClick={handleLowClick}>Conver to Lowercase</button>
                <button className="btn btn-primary m-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary m-2" onClick={handleClear}>Clear Text</button>


            </div>
            <div className="container my-3"  style={{color:props.mode==='dark' ? 'white' : '#042743'}}>
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} characters.</p>
                <p>{0.008 * text.split("").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"--! Enter inside Texbox to Preview !--"}</p>
            </div>
        </>
    );
}
