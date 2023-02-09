import { useState } from "react";

export default function Workspace(props) {
    const uppercaseFunc = () => {
        setData(data.toUpperCase());
        props.showAlert('success', 'Converted to Upper case')
    }
    const lowercaseFunc = () => {
        setData(data.toLowerCase())
        props.showAlert('success', 'Converted to Lower case')
    }
    const clearTextFunc = () => {
        setData('')
        props.showAlert('success', 'Text cleared')
    }
    const [data, setData] = useState('')
    const handleChange = (event) => {
        setData(event.target.value);
    }
    const copyText = () => {
        navigator.clipboard.writeText(data.toString());
        props.showAlert('success', 'Text copied')
    }
    const removeFrontBackSpaces = () => {
        setData(data.trim());
        props.showAlert('success', 'Front and Back spaces are removed')
    }
    const removeExtraSpaces = () => {
        var newData = data.split(/[ ]+/);
        setData(newData.join(" "))
        props.showAlert('success', 'Extra Spaces are removed')
    }
    
    return (
        <>
            <div className="container">
                <div className="form py-3">
                    <label htmlFor="dataofuser" className="my-1">Enter Your Data Here</label>
                    <textarea className={`form-control my-3 ${props.textarea}`} id="databox" value={data} onChange={handleChange} placeholder="Enter Text here" rows="8"></textarea>
                    <button className="btn btn-primary m-1" onClick={uppercaseFunc}>Change to Uppercase</button>
                    <button className="btn btn-primary m-1" onClick={lowercaseFunc}>Change to Lowercase</button>
                    <button className="btn btn-primary m-1" onClick={clearTextFunc}>Clear Text</button>
                    <button className="btn btn-primary m-1" onClick={copyText}>Copy Text</button>
                    <button className="btn btn-primary m-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-primary m-1" onClick={removeFrontBackSpaces}>Remove Starting and Ending Extra Spaces</button>
                </div>
                <div>
                    <h1>Text Summary</h1>
                    <p>{data.length===0 ? '0' : data.split(/[ ]+/).length} words and {data.length} characters</p>
                    <p>{0.008 * data.length===0 ? '0' : data.split(/[ ]+/).length} words and {data.length} minutes read</p>
                    <h2>Preview</h2>
                    <p>{data.length>0 ? data : 'Enter text in above text area to preview'}</p>
                </div>
            </div>
        </>
    );
};