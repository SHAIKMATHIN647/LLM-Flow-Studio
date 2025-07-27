// toolbar.js - Enhanced toolbar with all node types
import React from 'react';

const Toolbar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const nodeTypes = [
    { type: 'input', label: 'Input', color: '#10b981', icon: '📥' },
    { type: 'output', label: 'Output', color: '#ef4444', icon: '📤' },
    { type: 'llm', label: 'LLM', color: '#6b7280', icon: '🤖' },
    { type: 'text', label: 'Text', color: '#f59e0b', icon: '📝' },
    { type: 'filter', label: 'Filter', color: '#3b82f6', icon: '🔍' },
    { type: 'math', label: 'Math', color: '#f59e0b', icon: '🔢' },
    { type: 'api', label: 'API', color: '#0ea5e9', icon: '🌐' },
    { type: 'transform', label: 'Transform', color: '#8b5cf6', icon: '🔄' },
    { type: 'condition', label: 'Condition', color: '#6b7280', icon: '🔀' },
  ];

  const toolbarStyle = {
    position: 'fixed',
    left: '20px',
    top: '20px',
    zIndex: 1000,
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    maxWidth: '220px',
  };

  const headerStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '12px',
    textAlign: 'center',
  };

  const nodeButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
    padding: '8px 12px',
    margin: '4px 0',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'grab',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: '#f8fafc',
    color: '#374151',
    userSelect: 'none',
  };

  return (
    <div style={toolbarStyle}>
      <div style={headerStyle}>
        🧩 Node Library
      </div>
      <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '16px', textAlign: 'center' }}>
        Drag nodes to canvas
      </div>
      {nodeTypes.map((node) => (
        <button
          key={node.type}
          style={nodeButtonStyle}
          draggable
          onDragStart={(event) => onDragStart(event, node.type)}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = node.color + '20';
            e.target.style.transform = 'translateX(4px)';
            e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#f8fafc';
            e.target.style.transform = 'translateX(0)';
            e.target.style.boxShadow = 'none';
          }}
          onMouseDown={(e) => {
            e.target.style.cursor = 'grabbing';
          }}
          onMouseUp={(e) => {
            e.target.style.cursor = 'grab';
          }}
        >
          <span style={{ fontSize: '16px' }}>{node.icon}</span>
          <span>{node.label}</span>
        </button>
      ))}
      
      <div style={{
        marginTop: '16px',
        padding: '8px',
        backgroundColor: '#f0f9ff',
        borderRadius: '6px',
        fontSize: '11px',
        color: '#0369a1',
        textAlign: 'center',
        border: '1px solid #e0f2fe',
      }}>
        💡 Connect nodes by dragging from handles
      </div>
    </div>
  );
};

export default Toolbar;