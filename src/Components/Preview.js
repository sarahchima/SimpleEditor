import React , {useEffect}from 'react';
import { Link } from "react-router-dom";

import htmlToDraft from 'html-to-draftjs';


function Preview(props) {
    const { state } = props.location;
   
    useEffect(() => console.log(state))
    const date = state.date.toLocaleDateString()
    const { text, theme, title } = state;

    return (
        <div className={`preview ${theme}`}>
            <header className="header">
                <nav className="header-nav">
                    <Link to="/" className="header-title">Chaeban Editor</Link>
                </nav>
            </header>
            <div className="preview-body">
                <div>
                    <h1 className="preview-title">{title !== "" ? title : `Untitled`}</h1>
                    <p className="preview-date">{date}</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: text
                        }} className="preview-text"></div>

                </div>
            </div>
            <div className="preview-links">
                <div>
                    <Link to="/" className="link">Back to Editor</Link>
                    <Link to="/" className="link undecorated-link">View on Github</Link>
                </div>
            </div>
        </div>
    )
}

export default Preview;