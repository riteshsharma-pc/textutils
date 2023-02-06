import { useState } from "react";

export default function Workspace() {
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

    return (
        <>
            <div className="form my-3">
                <label htmlFor="dataofuser" className="my">Enter Your Data Here</label>
                <textarea className="form-control my-3" value={data} onChange={handleChange} placeholder="Enter Text here" rows="8" id="dataofuser"></textarea>
                <button className="btn btn-primary mx-1" onClick={uppercaseFunc}>Change to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={lowercaseFunc}>Change to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={clearTextFunc}>Clear Text</button>
            </div>
            <div>
                <h1>Text Summary</h1>
                <p>{data.split(' ').length} words and {data.length} characters</p>
                <p>{0.008 * data.split(' ').length} minutes read</p>
                <h2>Preview</h2>
                <p>{data}</p>
            </div>
        </>
    );
};
