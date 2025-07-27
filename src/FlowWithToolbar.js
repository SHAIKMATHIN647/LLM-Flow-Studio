// File: FlowWithToolbar.js

import React, { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 5 },
  },
];
const initialEdges = [];

const nodeTypes = {
  input: { label: "Input Node" },
  llm: { label: "LLM Node" },
  output: { label: "Output Node" },
};

export default function FlowWithToolbar() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  const addNode = (type) => {
    const id = (nodes.length + 1).toString();
    const newNode = {
      id,
      type: "default",
      data: { label: nodeTypes[type]?.label || "Node" },
      position: {
        x: Math.random() * 250 + 100,
        y: Math.random() * 250 + 100,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <div style={{ height: 500, width: "100%" }}>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => addNode("input")}>Add Input</button>
        <button onClick={() => addNode("llm")}>Add LLM</button>
        <button onClick={() => addNode("output")}>Add Output</button>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
