import React from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from './store';

function getColorByType(type) {
  switch (type) {
    case 'input': return '#e0f7e9';
    case 'llm': return '#e0ecff';
    case 'output': return '#ffe0e0';
    case 'text': return '#fff8d9';
    default: return '#f5f5f5';
  }
}

function EditableNode({ id, data, nodeType }) {
  const updateNodeField = useStore((s) => s.updateNodeField);

  const handleChange = (e) => {
    updateNodeField(id, 'label', e.target.value);
  };

  return (
    <div
      style={{
        padding: '14px',
        borderRadius: '12px',
        backgroundColor: getColorByType(nodeType),
        border: '1px solid #ccc',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: 200,
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
      }}
    >
      <Handle type="target" position={Position.Top} style={{ background: '#555' }} />

      <div style={{ fontSize: 12, color: '#666', marginBottom: 4, textTransform: 'uppercase' }}>
        {nodeType}
      </div>

      <input
        value={data.label}
        onChange={handleChange}
        placeholder="Enter label"
        style={{
          width: '90%',
          padding: '8px 8px',
          border: '1px solid #aaa',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '500',
          outline: 'none',
        }}
      />

      <Handle type="source" position={Position.Bottom} style={{ background: '#555' }} />
    </div>
  );
}

export default EditableNode;
