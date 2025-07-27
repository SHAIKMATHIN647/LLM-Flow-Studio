// filterNode.js - Data filtering node
import BaseNode from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const inputs = [
    { id: 'data', color: '#3b82f6' },
    { id: 'condition', color: '#8b5cf6' }
  ];

  const outputs = [
    { id: 'filtered', color: '#10b981' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="filter"
      title="Filter"
      inputs={inputs}
      outputs={outputs}
      backgroundColor="#dbeafe"
      borderColor="#3b82f6"
      titleColor="#1e40af"
      minWidth={200}
      minHeight={110}
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
            Filter Type:
          </label>
          <select
            value={nodeData.filterType || 'equals'}
            onChange={(e) => handleInputChange('filterType', e.target.value)}
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
            <option value="equals">Equals</option>
            <option value="contains">Contains</option>
            <option value="greater">Greater Than</option>
            <option value="less">Less Than</option>
          </select>
        </div>
      )}
    </BaseNode>
  );
};

// mathNode.js - Mathematical operations node
export const MathNode = ({ id, data }) => {
  const inputs = [
    { id: 'a', color: '#f59e0b' },
    { id: 'b', color: '#f59e0b' }
  ];

  const outputs = [
    { id: 'result', color: '#10b981' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="math"
      title="Math"
      inputs={inputs}
      outputs={outputs}
      backgroundColor="#fef3c7"
      borderColor="#f59e0b"
      titleColor="#92400e"
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
            Operation:
          </label>
          <select
            value={nodeData.operation || 'add'}
            onChange={(e) => handleInputChange('operation', e.target.value)}
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
            <option value="add">Add (+)</option>
            <option value="subtract">Subtract (-)</option>
            <option value="multiply">Multiply (×)</option>
            <option value="divide">Divide (÷)</option>
          </select>
        </div>
      )}
    </BaseNode>
  );
};

// apiNode.js - API request node
export const APINode = ({ id, data }) => {
  const inputs = [
    { id: 'url', color: '#8b5cf6' },
    { id: 'headers', color: '#6366f1' },
    { id: 'body', color: '#ec4899' }
  ];

  const outputs = [
    { id: 'response', color: '#10b981' },
    { id: 'error', color: '#ef4444' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="api"
      title="API Request"
      inputs={inputs}
      outputs={outputs}
      backgroundColor="#f0f9ff"
      borderColor="#0ea5e9"
      titleColor="#0c4a6e"
      minWidth={220}
      minHeight={130}
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
            Method:
          </label>
          <select
            value={nodeData.method || 'GET'}
            onChange={(e) => handleInputChange('method', e.target.value)}
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
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
          
          <label style={{ 
            display: 'block', 
            fontSize: '12px', 
            fontWeight: '500',
            color: '#374151',
            marginBottom: '4px'
          }}>
            Timeout (ms):
          </label>
          <input
            type="number"
            value={nodeData.timeout || 5000}
            onChange={(e) => handleInputChange('timeout', parseInt(e.target.value))}
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
        </div>
      )}
    </BaseNode>
  );
};

// transformNode.js - Data transformation node
export const TransformNode = ({ id, data }) => {
  const inputs = [
    { id: 'input', color: '#8b5cf6' }
  ];

  const outputs = [
    { id: 'output', color: '#10b981' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="transform"
      title="Transform"
      inputs={inputs}
      outputs={outputs}
      backgroundColor="#f3e8ff"
      borderColor="#8b5cf6"
      titleColor="#6b21a8"
      minWidth={200}
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
            Transform Type:
          </label>
          <select
            value={nodeData.transformType || 'uppercase'}
            onChange={(e) => handleInputChange('transformType', e.target.value)}
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
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="reverse">Reverse</option>
            <option value="trim">Trim</option>
            <option value="json">To JSON</option>
          </select>
          
          <label style={{ 
            display: 'block', 
            fontSize: '12px', 
            fontWeight: '500',
            color: '#374151',
            marginBottom: '4px'
          }}>
            Custom Script:
          </label>
          <textarea
            value={nodeData.script || ''}
            onChange={(e) => handleInputChange('script', e.target.value)}
            placeholder="// Optional JS code"
            style={{
              width: '100%',
              height: '40px',
              padding: '4px 6px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '12px',
              outline: 'none',
              backgroundColor: '#ffffff',
              resize: 'none'
            }}
          />
        </div>
      )}
    </BaseNode>
  );
};

// conditionNode.js - Conditional logic node
export const ConditionNode = ({ id, data }) => {
  const inputs = [
    { id: 'condition', color: '#8b5cf6' },
    { id: 'true_value', color: '#10b981' },
    { id: 'false_value', color: '#ef4444' }
  ];

  const outputs = [
    { id: 'result', color: '#6b7280' }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="condition"
      title="Condition"
      inputs={inputs}
      outputs={outputs}
      backgroundColor="#f9fafb"
      borderColor="#6b7280"
      titleColor="#374151"
      minWidth={200}
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
            Logic Type:
          </label>
          <select
            value={nodeData.logicType || 'if_else'}
            onChange={(e) => handleInputChange('logicType', e.target.value)}
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
            <option value="if_else">If-Else</option>
            <option value="switch">Switch</option>
            <option value="ternary">Ternary</option>
          </select>
        </div>
      )}
    </BaseNode>
  );
};