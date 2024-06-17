import React, { useState } from 'react';
import Prism from 'prismjs';
import { Highlight, themes } from 'prism-react-renderer';
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <textarea
        className="code-input"
        value={code}
        onChange={handleCodeChange}
        spellCheck="false"
      />
      <Highlight
        code={code}
        language="javascript"
        theme={themes.github}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="code-output">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;

