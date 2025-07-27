// llmNode.js - Refactored using BaseNode
import BaseNode from './BaseNode';

const LLMNode = ({ id, data }) => {
  const inputs = [
    { id: 'system', color: '#8b5cf6' },
    { id: 'prompt', color: '#6366f1' }
  ];

  const outputs = [
    { id: 'response', color: '#10b981' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="llm"
      title="LLM"
      inputs={inputs}
      outputs={outputs}
      backgroundColor="#f3f4f6"
      borderColor="#6b7280"
      titleColor="#1f2937"
      minWidth={220}
      minHeight={120}
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
            Model:
          </label>
          <select
            value={nodeData.model || 'gpt-3.5-turbo'}
            onChange={(e) => handleInputChange('model', e.target.value)}
            style={{
              width: '100%',
              padding: '6px 8px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '14px',
              outline: 'none',
              backgroundColor: '#ffffff',
              marginBottom: '8px'
            }}
          >
            <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
            <option value="gpt-4">GPT-4</option>
            <option value="claude-3-sonnet">Claude 3 Sonnet</option>
            <option value="claude-3-opus">Claude 3 Opus</option>
          </select>

          <label style={{ 
            display: 'block', 
            fontSize: '12px', 
            fontWeight: '500',
            color: '#374151',
            marginBottom: '4px'
          }}>
            Temperature:
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={nodeData.temperature || 0.7}
            onChange={(e) => handleInputChange('temperature', parseFloat(e.target.value))}
            style={{
              width: '100%',
              marginBottom: '4px'
            }}
          />
          <div style={{ 
            fontSize: '12px', 
            color: '#6b7280', 
            textAlign: 'center' 
          }}>
            {nodeData.temperature || 0.7}
          </div>
        </div>
      )}
    </BaseNode>
  );
};

export default LLMNode;