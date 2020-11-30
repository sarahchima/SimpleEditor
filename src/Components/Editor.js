import React, { useState, useEffect }from 'react';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Dropdown from 'react-dropdown';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'draft-js/dist/Draft.css';

import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';

function EditorView() {
    const [date, setDate] = useState(new Date());
    const [theme, setTheme] = useState('default')
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
      );
    const [title, setTitle] = useState('');


    const options = [
        'default',
        'dark',
        'pink', 
        'purple', 
        'yellow'
      ];
    // alert(JSON.stringify(convertToRaw( editorState.getCurrentContent())))
    useEffect(() => console.log(editorState.getCurrentContent().getPlainText()))

    return (
        <div>

            <div >
                <div className="editor-body">
                    <header className="header">
                        <nav className="header-nav">
                            <Link to="/" className="header-title">Chaeban Editor</Link>
                        </nav>
                    </header>
                    <main>
                        <div className="editor-container">
                            <input className="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Add a Title"/>
                            <Editor 
                                className="editorStyle"
                                editorState={editorState}
                                placeholder="Let the thoughts flow"
                                onChange={state => setEditorState(state)}
                                spellCheck={true} 
                                />
                        </div>
                    </main>

                    <aside className="side-menu">
                        <h3>Settings </h3>
                        <div className="date-container">
                            <label className="label">Date</label>
                            <DatePicker selected={date} onChange={date => setDate(date)} />
                        </div>

                        <div>
                            <label className="label">Theme</label>
                            <Dropdown options={options}  value={theme} onChange={theme => setTheme(theme.value)} placeholder="Select a theme" />
                        </div>

                    
                        <Link className="link" to={{
                            pathname: '/preview',
                            state: {
                                date,
                                theme,
                                text: draftToHtml(convertToRaw(editorState.getCurrentContent())),
                                title
                            }
                        }}> 
                            Preview 
                        </Link>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default EditorView;