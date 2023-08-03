import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    // 
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    // 
    const handleLowCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    // 
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    };
    // 
    const clearText = () => {
        setText("");
        props.textFormAlert("Clear","danger");
    };
    //
    const removeSpaces = ()=> {
        let newFormat = text.split(/[ ]+/);
        setText(newFormat.join(" "));
    }
    //
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        // props.showAlert("")
    }
    return (
        <>
            <h1 htmlFor="textBox" style={{color: props.mode === "light" ? "black":"white"}} className='text-center'>{props.heading}</h1>
            <div className="mb-3 container">
                <textarea className="form-control" style={{backgroundColor: props.mode === "light" ? "#343a40":"#f8f9fa", color: props.mode === "light" ? "#f8f9fa":"#343a40"}} value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
            </div>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpCase} >UPPERCASE</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowCase} >lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={removeSpaces} >Remove spaces</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy</button>
                    <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" onClick={clearText} >Clear</button>
            <div className="container">
                <h1 style={{color: props.mode === "light" ? "black":"white"}}>My text summary</h1>
                <p style={{color: props.mode === "light" ? "black":"white"}}>Charecter =&#62; {text.length}</p>
                <p style={{color: props.mode === "light" ? "black":"white"}}>Word =&#62; {text.split(" ").filter((el)=>{return el.length !== 0}).length}</p>
                <p style={{color: props.mode === "light" ? "black":"white"}}>Reading time(Per Words) =&#62; {0.008 * (text.split(" ").filter((el)=>{return el.length !== 0}).length)} minutes</p>
            </div>
        </>
    )
}
