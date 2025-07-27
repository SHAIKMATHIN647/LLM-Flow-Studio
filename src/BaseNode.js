// BaseNode.js - Reusable node abstraction
import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({ 
  id, 
  data, 
  type,
  title,
  inputs = [],
  outputs = [],
  children,
  backgroundColor = '#ffffff',
  borderColor = '#e2e8f0',
  titleColor = '#1f2937',
  minWidth = 200,
  minHeight = 80,
  isDynamic = false
}) => {
  const [nodeData, setNodeData] = useState(data);
  const [dimensions, setDimensions] = useState({ width: minWidth, height: minHeight });
  const nodeRef = useRef(null);

  // Update node data when data prop changes
  useEffect(() => {
    setNodeData(data);
  }, [data]);

  // Dynamic sizing for text nodes
  useEffect(() => {
    if (isDynamic && nodeRef.current) {
      const content = nodeRef.current.querySelector('.node-content');
      if (content) {
        const contentHeight = content.scrollHeight;
        const contentWidth = content.scrollWidth;
        setDimensions({
          width: Math.max(minWidth, contentWidth + 40),
          height: Math.max(minHeight, contentHeight + 60)
        });
      }
    }
  }, [nodeData, isDynamic, minWidth, minHeight]);

  const handleInputChange = (field, value) => {
    setNodeData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nodeStyle = {
    backgroundColor,
    border: `2px solid ${borderColor}`,
    borderRadius: '12px',
    padding: '16px',
    minWidth: dimensions.width,
    minHeight: dimensions.height,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    transition: 'all 0.2s ease-in-out',
    position: 'relative'
  };

  const titleStyle = {
    color: titleColor,
    fontWeight: '600',
    fontSize: '14px',
    marginBottom: '12px',
    textAlign: 'center',
    letterSpacing: '0.025em'
  };

  return (
    <div ref={nodeRef} style={nodeStyle} className="base-node">
      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={input.id || `input-${index}`}
          style={{
            top: `${20 + (index * 25)}px`,
            backgroundColor: input.color || '#6366f1',
            width: '12px',
            height: '12px',
            border: '2px solid white'
          }}
        />
      ))}

      {/* Node Title */}
      <div style={titleStyle}>
        {title}
      </div>

      {/* Node Content */}
      <div className="node-content">
        {children ? children(nodeData, handleInputChange) : null}
      </div>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={output.id || `output-${index}`}
          style={{
            top: `${20 + (index * 25)}px`,
            backgroundColor: output.color || '#10b981',
            width: '12px',
            height: '12px',
            border: '2px solid white'
          }}
        />
      ))}
    </div>
  );
};

export default BaseNode;