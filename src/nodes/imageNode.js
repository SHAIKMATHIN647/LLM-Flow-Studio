// imageNode.js
import React from 'react';
import BaseNode from './BaseNode';

const ImageNode = () => {
  return (
    <BaseNode title="Image" inputs={['image']} outputs={['processedImage']}>
      <p>Processes images</p>
    </BaseNode>
  );
};

export default ImageNode;
