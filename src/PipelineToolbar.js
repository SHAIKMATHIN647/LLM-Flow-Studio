import React from 'react';
import { useStore } from './store';

export function PipelineToolbar() {
  const addNode = useStore((s) => s.addNode);
  const getNodeID = useStore((s) => s.getNodeID);
  const clearAll = useStore((s) => s.clearAll);
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);
  const setNodes = useStore((s) => s.setNodes);
  const setEdges = useStore((s) => s.setEdges);

  const handleAddNode = (type, label) => {
    const id = getNodeID(type);
    const newNode = {
      id,
      type: 'editableNode',
      nodeType: type,
      position: { x: Math.random() * 600, y: Math.random() * 300 },
      data: { label: `${label} (${id})` },
    };
    addNode(newNode);
  };

  const handleSave = () => {
    localStorage.setItem('pipeline_nodes', JSON.stringify(nodes));
    localStorage.setItem('pipeline_edges', JSON.stringify(edges));
    alert('✅ Pipeline saved!');
  };

  const handleLoad = () => {
    const savedNodes = JSON.parse(localStorage.getItem('pipeline_nodes') || '[]');
    const savedEdges = JSON.parse(localStorage.getItem('pipeline_edges') || '[]');
    setNodes(savedNodes);
    setEdges(savedEdges);
    alert('📂 Pipeline loaded!');
  };

  const buttonStyle = {
    padding: '8px 14px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
  };

  return (
    <div style={{
      padding: 12,
      background: '#f1f1f1',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid #ccc'
    }}>
      <button style={buttonStyle} onClick={() => handleAddNode('input', 'Input')}>Input</button>
      <button style={buttonStyle} onClick={() => handleAddNode('llm', 'LLM')}>LLM</button>
      <button style={buttonStyle} onClick={() => handleAddNode('output', 'Output')}>Output</button>
      <button style={buttonStyle} onClick={() => handleAddNode('text', 'Text')}>Text</button>
      <button style={{ ...buttonStyle, backgroundColor: '#dc3545' }} onClick={clearAll}>Clear All</button>
      <button style={{ ...buttonStyle, backgroundColor: '#28a745' }} onClick={handleSave}>💾 Save</button>
      <button style={{ ...buttonStyle, backgroundColor: '#17a2b8' }} onClick={handleLoad}>📂 Load</button>
    </div>
  );
}
