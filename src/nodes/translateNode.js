// translateNode.js
import React from 'react';
import BaseNode from './BaseNode';

const TranslateNode = () => {
  return (
    <BaseNode title="Translate" inputs={['text']} outputs={['translatedText']}>
      <p>Translates text</p>
    </BaseNode>
  );
};

export default TranslateNode;
