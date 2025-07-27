import { createWithEqualityFn } from 'zustand/traditional';
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from 'reactflow';

export const useStore = createWithEqualityFn(
  (set, get) => ({
    nodes: [],
    edges: [],
    nodeIDs: {},

    getNodeID: (type) => {
      const newIDs = { ...get().nodeIDs };
      newIDs[type] = (newIDs[type] || 0) + 1;
      set({ nodeIDs: newIDs });
      return `${type}-${newIDs[type]}`;
    },

    addNode: (node) => set({ nodes: [...get().nodes, node] }),

    setNodes: (nodes) => set({ nodes }),
    setEdges: (edges) => set({ edges }),

    onNodesChange: (changes) =>
      set({ nodes: applyNodeChanges(changes, get().nodes) }),

    onEdgesChange: (changes) =>
      set({ edges: applyEdgeChanges(changes, get().edges) }),

    onConnect: (connection) =>
      set({
        edges: addEdge(
          {
            ...connection,
            type: 'smoothstep',
            animated: true,
            markerEnd: { type: MarkerType.Arrow },
          },
          get().edges
        ),
      }),

    onNodesDelete: (deleted) =>
      set({ nodes: get().nodes.filter((n) => !deleted.some((d) => d.id === n.id)) }),

    onEdgesDelete: (deleted) =>
      set({ edges: get().edges.filter((e) => !deleted.some((d) => d.id === e.id)) }),

    updateNodeField: (id, field, value) =>
      set({
        nodes: get().nodes.map((node) =>
          node.id === id ? { ...node, data: { ...node.data, [field]: value } } : node
        ),
      }),

    clearAll: () => set({ nodes: [], edges: [], nodeIDs: {} }),
  }),
  Object.is
);
