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
        setData(newData.join(" ").trim())
        props.showAlert('success', 'Extra Spaces are removed')
    }
    
    return (
        <>
            <div className="container">
                <div className="form py-3">
                    <label htmlFor="dataofuser" className="my-1">Enter Your Data Here</label>
                    <textarea className={`form-control my-3 ${props.textarea}`} id="databox" value={data} onChange={handleChange} placeholder="Enter Text here" rows="8"></textarea>
                    <button disabled={data.split(/[\s+]/).filter((element)=>{return element.length!==0}).length===0} className="btn btn-primary m-1" onClick={uppercaseFunc}>Change to Uppercase</button>
                    <button disabled={data.split(/[\s+]/).filter((element)=>{return element.length!==0}).length===0} className="btn btn-primary m-1" onClick={lowercaseFunc}>Change to Lowercase</button>
                    <button disabled={data.length===0} className="btn btn-primary m-1" onClick={clearTextFunc}>Clear Text</button>
                    <button disabled={data.split(/[\s+]/).filter((element)=>{return element.length!==0}).length===0} className="btn btn-primary m-1" onClick={copyText}>Copy Text</button>
                    <button disabled={data.split(/[\s+]/).filter((element)=>{return element.length!==0}).length===0} className="btn btn-primary m-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={data.split(/[\s+]/).filter((element)=>{return element.length!==0}).length===0} className="btn btn-primary m-1" onClick={removeFrontBackSpaces}>Remove Starting and Ending Extra Spaces</button>
                </div>
                <div>
                    <h1>Text Summary</h1>
                    <p>{data.split(/[\s+]/).filter((element)=>{return element.length!==0}).length} words</p>
                    <p>{data.length} characters {"(including spaces)"}</p>
                    <p>{data.split(' ').length-1} white spaces</p>
                    <p>{data.length - (data.split(' ').length -1)} characters count without spaces</p>
                    <p>{data.split(/[ ]+/).join(" ").trim().length} characters count without extra spaces</p>
                    <p>{0.016 * data.split(' ').filter((element)=>{return element.length!==0}).length} minutes read</p>
                    <h2>Preview</h2>
                    <p>{data.split(' ').filter((element)=>{return element.length!==0}).length>0 ? data : 'Enter text in above text area to preview'}</p>
                </div>
            </div>
        </>
    );
};