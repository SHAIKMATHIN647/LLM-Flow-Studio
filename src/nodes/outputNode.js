// outputNode.js - Refactored using BaseNode
import BaseNode from './BaseNode';

const OutputNode = ({ id, data }) => {
  const inputs = [
    { id: 'value', color: '#ef4444' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="output"
      title="Output"
      inputs={inputs}
      outputs={[]}
      backgroundColor="#fef2f2"
      borderColor="#ef4444"
      titleColor="#991b1b"
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
            value={nodeData.outputName || ''}
            onChange={(e) => handleInputChange('outputName', e.target.value)}
            placeholder="Enter output name"
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
            value={nodeData.outputType || 'Text'}
            onChange={(e) => handleInputChange('outputType', e.target.value)}
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
            <option value="Image">Image</option>
          </select>
        </div>
      )}
    </BaseNode>
  );
};

export default OutputNode;