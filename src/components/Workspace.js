import { useState } from "react";

export default function Workspace(props) {
    const uppercaseFunc = () => {
        setData(data.toUpperCase())
    }
    const lowercaseFunc = () => {
        setData(data.toLowerCase())
    }
    const clearTextFunc = () => {
        setData('')
    }
    const [data, setData] = useState('')
    const handleChange = (event) => {
        setData(event.target.value);
    }
    const copyText = () => {
        navigator.clipboard.writeText(data.toString());
    }
    const removeFrontBackSpaces = () => {
        setData(data.trim());
    }
    const removeExtraSpaces = () => {
        var newData = data.split(/[ ]+/);
        setData(newData.join(" "))
    }
    return (
        <>
            <div style={props.theme}>
                <div className="form py-3">
                    <label htmlFor="dataofuser" className="my-1">Enter Your Data Here</label>
                    <textarea className="form-control my-3" id="databox" value={data} onChange={handleChange} placeholder="Enter Text here" rows="8"></textarea>
                    <button className="btn btn-primary mx-1" onClick={uppercaseFunc}>Change to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={lowercaseFunc}>Change to Lowercase</button>
                    <button className="btn btn-primary mx-1" onClick={clearTextFunc}>Clear Text</button>
                    <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
                    <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-primary mx-1" onClick={removeFrontBackSpaces}>Remove Starting and Ending Extra Spaces</button>
                </div>
                <div>
                    <h1>Text Summary</h1>
                    <p>{data.split(' ').length} words and {data.length} characters</p>
                    <p>{0.008 * data.split(' ').length} minutes read</p>
                    <h2>Preview</h2>
                    <p>{data}</p>
                </div>
            </div>
        </>
    );
};