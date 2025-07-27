// textNode.js - Enhanced Text Node with variable detection
import { useState, useEffect } from 'react';
import BaseNode from './BaseNode';

const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);

  // Extract variables from text ({{variableName}})
  useEffect(() => {
    const variableRegex = /\{\{([^}]+)\}\}/g;
    const matches = [];
    let match;
    
    while ((match = variableRegex.exec(text)) !== null) {
      const variableName = match[1].trim();
      if (variableName && !matches.includes(variableName)) {
        matches.push(variableName);
      }
    }
    
    setVariables(matches);
  }, [text]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  // Generate input handles for variables
  const inputs = variables.map(variable => ({
    id: `input-${variable}`,
    color: '#8b5cf6'
  }));

  // Always have one output
  const outputs = [
    { id: 'output', color: '#10b981' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="text"
      title="Text"
      inputs={inputs}
      outputs={outputs}
      backgroundColor="#fef3c7"
      borderColor="#f59e0b"
      titleColor="#92400e"
      minWidth={250}
      minHeight={120}
      isDynamic={true}
    >
      {() => (
        <div style={{ width: '100%' }}>
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text here. Use {{variableName}} for variables."
            style={{
              width: '100%',
              minHeight: '60px',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              fontSize: '14px',
              fontFamily: 'inherit',
              resize: 'none',
              outline: 'none',
              backgroundColor: '#ffffff'
            }}
            rows={3}
          />
          {variables.length > 0 && (
            <div style={{ marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>
              Variables: {variables.join(', ')}
            </div>
          )}
        </div>
      )}
    </BaseNode>
  );
};

export default TextNode;