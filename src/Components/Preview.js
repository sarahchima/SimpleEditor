import React from 'react';
import { Link } from "react-router-dom";

import  Header from './Header';


function Preview(props) {
    const { state } = props.location;
   
    const date = state.date.toLocaleDateString()
    const { text, theme, title } = state;

    return (
        <div className={`preview ${theme}`}>
            <Header />
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
                    <Link to="/SimpleEditor" className="link">Back to Editor</Link>
                    <a href="https://github.com/sarahchima/SimpleEditor" className="link undecorated-link">View on Github</a>
                </div>
            </div>
        </div>
    )
}

export default Preview;