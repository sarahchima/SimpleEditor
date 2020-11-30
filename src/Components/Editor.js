import React, { useState }from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import SideMenu from './SideMenu';
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

    return (
        <div>
            <div >
                <div className="editor-body">
                    <Header />
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
                       <SideMenu
                            date={date}
                            theme={theme}
                            setDate={setDate}
                            setTheme={setTheme}
                       />
                    
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