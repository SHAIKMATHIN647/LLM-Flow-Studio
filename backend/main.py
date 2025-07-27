# main.py - FastAPI backend with DAG validation
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
import networkx as nx

app = FastAPI()

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for request/response
class NodeData(BaseModel):
    id: str
    type: str
    position: Dict[str, float]
    data: Dict[str, Any]

class EdgeData(BaseModel):
    id: str
    source: str
    target: str
    sourceHandle: str = None
    targetHandle: str = None

class PipelineData(BaseModel):
    nodes: List[NodeData]
    edges: List[EdgeData]

class PipelineResponse(BaseModel):
    num_nodes: int
    num_edges: int
    is_dag: bool

def is_directed_acyclic_graph(nodes: List[NodeData], edges: List[EdgeData]) -> bool:
    """
    Check if the given nodes and edges form a directed acyclic graph (DAG).
    """
    if not edges:
        return True  # No edges means no cycles
    
    # Create a directed graph using networkx
    G = nx.DiGraph()
    
    # Add nodes
    for node in nodes:
        G.add_node(node.id)
    
    # Add edges
    for edge in edges:
        G.add_edge(edge.source, edge.target)
    
    # Check if it's a DAG (no cycles)
    return nx.is_directed_acyclic_graph(G)

@app.get("/")
async def root():
    return {"message": "VectorShift Backend API"}

@app.post("/pipelines/parse", response_model=PipelineResponse)
async def parse_pipeline(pipeline: PipelineData):
    """
    Parse a pipeline and return statistics including DAG validation.
    """
    try:
        # Calculate basic statistics
        num_nodes = len(pipeline.nodes)
        num_edges = len(pipeline.edges)
        
        # Check if it forms a DAG
        is_dag = is_directed_acyclic_graph(pipeline.nodes, pipeline.edges)
        
        return PipelineResponse(
            num_nodes=num_nodes,
            num_edges=num_edges,
            is_dag=is_dag
        )
    
    except Exception as e:
        # In case of any error, return basic info with is_dag=False
        return PipelineResponse(
            num_nodes=len(pipeline.nodes) if pipeline.nodes else 0,
            num_edges=len(pipeline.edges) if pipeline.edges else 0,
            is_dag=False
        )

@app.get("/health")
async def health_check():
    return {"status": "healthy", "message": "Backend is running"}

# Additional endpoint for testing
@app.get("/pipelines")
async def get_pipelines():
    return {"message": "Pipeline endpoints available", "endpoints": ["/pipelines/parse"]}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)