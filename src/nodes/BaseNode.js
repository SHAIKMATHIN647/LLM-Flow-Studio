// BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';
import './BaseNode.css';

const BaseNode = ({ title, inputs = [], outputs = [], children }) => {
  return (
    <div className="base-node">
      <div className="base-node-title">{title}</div>

      {/* Input Handles on left */}
      {inputs.map((inputId, idx) => (
        <Handle
          key={inputId}
          type="target"
          position={Position.Left}
          id={inputId}
          className="react-flow__handle react-flow__handle-left"
          style={{ top: 30 + idx * 20 }}
        />
      ))}

      {/* Output Handles on right */}
      {outputs.map((outputId, idx) => (
        <Handle
          key={outputId}
          type="source"
          position={Position.Right}
          id={outputId}
          className="react-flow__handle react-flow__handle-right source"
          style={{ top: 30 + idx * 20 }}
        />
      ))}

      <div className="base-node-content">{children}</div>
    </div>
  );
};

export default BaseNode;
