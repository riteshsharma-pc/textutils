export default function About(props) {
    return (
        <>
            <div className="container">
                <div className="accordion accordion-flush m-3" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className={`accordion-header ${props.acordianBody}`} id="flush-headingOne">
                            <button className={`${props.mode==='light' ? 'accordion-button' : 'accordion-button accordion-button-dark'} collapsed ${props.acordianBody}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Analyze your text
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className={`accordion-collapse collapse ${props.acordianBody}`} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className={`accordion-body ${props.acordianBody}`}>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count and more...</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className={`accordion-header ${props.acordianBody}`} id="flush-headingTwo">
                            <button className={`${props.mode==='light' ? 'accordion-button' : 'accordion-button accordion-button-dark'} collapsed ${props.acordianBody}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Free to use
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className={`accordion-collapse collapse ${props.acordianBody}`} aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className={`accordion-body ${props.acordianBody}`}>
                                TextUtils is a free character center tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className={`accordion-header ${props.acordianBody}`} id="flush-headingThree">
                            <button className={`${props.mode==='light' ? 'accordion-button' : 'accordion-button accordion-button-dark'} collapsed ${props.acordianBody}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Browser Compatible
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className={`accordion-body collapse ${props.acordianBody}`} aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className={`accordion-body ${props.acordianBody}`}>
                                This word counter softwaare works in any web browsers such as Chrome, firefox, brave, safari, Opera etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
