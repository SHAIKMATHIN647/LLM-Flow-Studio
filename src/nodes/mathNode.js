// mathNode.js
import React from 'react';
import BaseNode from './BaseNode';

const MathNode = () => {
  return (
    <BaseNode title="Math" inputs={['a', 'b']} outputs={['sum']}>
      <p>Adds two numbers</p>
    </BaseNode>
  );
};

export default MathNode;
