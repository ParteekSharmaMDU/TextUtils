import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLwClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () => {
        let newText = ""
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        let newText = document.getElementById('mybox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
    }

    const handleCapitalize = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);;
        setText(newText);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    return (
        <div style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1 style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white' }}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                 color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="mybox" rows="10"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLwClick}>Convert To LowerCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize Text</button>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                <h2>Text Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview."}</p>
            </div>
        </div>
    )
}