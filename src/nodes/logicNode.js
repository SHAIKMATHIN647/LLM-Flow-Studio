// logicNode.js
import React from 'react';
import BaseNode from './BaseNode';

const LogicNode = () => {
  return (
    <BaseNode title="Logic" inputs={['input']} outputs={['output']}>
      <p>Performs logical operations</p>
    </BaseNode>
  );
};

export default LogicNode;
