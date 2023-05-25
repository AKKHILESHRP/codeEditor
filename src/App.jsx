import React, { useEffect, useState } from 'react';
import Editor from './components/Editor';

const App = () => {

    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [javascript, setJavascript] = useState("");
    const [srcDoc, setSrcDoc] = useState("");

    useEffect(() => {
        setSrcDoc(`
            <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${javascript}</script>
            </html>
        `)
    }, [html, css, javascript]);

  return (
    <>
        <div className='top-panel'>
            <Editor title="HTML" language="xml" value={html} onChange={setHtml} />
            <Editor title="CSS" language="css"value={css} onChange={setCss} />
            <Editor title="JavaScript" language="javascript" value={javascript} onChange={setJavascript} />
        </div>

        <div className='bottom-panel'>
            <iframe srcDoc={srcDoc} title='output' sandbox='allow-scripts' width="100%" height="100%" />
        </div>
    </>
  );
};

export default App;
