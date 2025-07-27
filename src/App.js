import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import { PipelineToolbar } from './PipelineToolbar';
import { PipelineUI } from './PipelineUI';

function App() {
  return (
    <ReactFlowProvider>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <PipelineToolbar />
        <div style={{ flexGrow: 1 }}>
          <PipelineUI />
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default App;
