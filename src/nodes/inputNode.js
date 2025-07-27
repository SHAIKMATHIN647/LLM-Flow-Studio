// inputNode.js - Refactored using BaseNode
import BaseNode from './BaseNode';

const InputNode = ({ id, data }) => {
  const outputs = [
    { id: 'value', color: '#10b981' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="input"
      title="Input"
      inputs={[]}
      outputs={outputs}
      backgroundColor="#ecfdf5"
      borderColor="#10b981"
      titleColor="#065f46"
      minWidth={180}
      minHeight={100}
    >
      {(nodeData, handleInputChange) => (
        <div style={{ width: '100%' }}>
          <label style={{ 
            display: 'block', 
            fontSize: '12px', 
            fontWeight: '500',
            color: '#374151',
            marginBottom: '4px'
          }}>
            Name:
          </label>
          <input
            type="text"
            value={nodeData.inputName || ''}
            onChange={(e) => handleInputChange('inputName', e.target.value)}
            placeholder="Enter input name"
            style={{
              width: '100%',
              padding: '6px 8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '14px',
              outline: 'none',
              backgroundColor: '#ffffff'
            }}
          />
          <label style={{ 
            display: 'block', 
            fontSize: '12px', 
            fontWeight: '500',
            color: '#374151',
            marginTop: '8px',
            marginBottom: '4px'
          }}>
            Type:
          </label>
          <select
            value={nodeData.inputType || 'Text'}
            onChange={(e) => handleInputChange('inputType', e.target.value)}
            style={{
              width: '100%',
              padding: '6px 8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '14px',
              outline: 'none',
              backgroundColor: '#ffffff'
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
            <option value="Number">Number</option>
          </select>
        </div>
      )}
    </BaseNode>
  );
};

export default InputNode;