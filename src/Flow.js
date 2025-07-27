import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'default',
    position: { x: 100, y: 100 },
    data: { label: 'Node 1' },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 400, y: 100 },
    data: { label: 'Node 2' },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // Called when nodes change position, or when nodes are added/removed
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => nds.map(node => {
      const change = changes.find(c => c.id === node.id);
      return change ? { ...node, ...change } : node;
    })),
    []
  );

  // Called when edges change (added, removed)
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => eds.filter(edge => !changes.some(c => c.id === edge.id))),
    []
  );

  // Called when user connects nodes (creates an edge)
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ height: 500, width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
