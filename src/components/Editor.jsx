import React, { useState } from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { Launch, TransitEnterexit } from '@material-ui/icons';

const Editor = ({ language, title, value, onChange }) => {

    const handleChange = (editor, data, value) => {
        onChange(value);
    };

    const [open, setOpen] = useState(true);

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
        <div className='editor-title'>
            {title}
            <button onClick={() => setOpen((prevOpen) => !prevOpen)} className='expand-collapse-button'>
                {open ? <TransitEnterexit /> : <Launch />}
            </button>
        </div>
        <ControlledEditor onBeforeChange={handleChange} value={value} className='code-mirror-wrapper' options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: "material",
            lineNumbers: true,
        }}/>
    </div>
  );
};

export default Editor;