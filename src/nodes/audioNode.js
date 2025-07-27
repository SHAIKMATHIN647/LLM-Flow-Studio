// audioNode.js
import React from 'react';
import BaseNode from './BaseNode';

const AudioNode = () => {
  return (
    <BaseNode title="Audio" inputs={['audio']} outputs={['processedAudio']}>
      <p>Processes audio</p>
    </BaseNode>
  );
};

export default AudioNode;
