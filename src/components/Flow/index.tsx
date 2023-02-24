import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
} from "reactflow";

import "reactflow/dist/base.css";

import CustomNode from "../CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

const init: any = [
  {
    id: "1",
    type: "custom",
    data: {
      textOne: "Energy Meter - HT Transformer #1",
      textTwo: "Incomer: 66 kv",
      imageUrl:
        "https://res.cloudinary.com/dqexqku43/image/upload/v1677184686/Group_29544_tctvfu.jpg",
    },
    position: {
      x: -1682.3436965160586,
      y: -1002.8606199586854,
    },
    width: 272,
    height: 172,
    selected: false,
    positionAbsolute: {
      x: -1682.3436965160586,
      y: -1002.8606199586854,
    },
    dragging: false,
  },
  {
    id: "2",
    type: "custom",
    data: {
      textOne: "HT Transformer #1",
      textTwo: "Loss 40 kv",
      imageUrl:
        "https://res.cloudinary.com/dqexqku43/image/upload/v1677185241/Group_29538_fqglyw.jpg",
    },
    position: {
      x: -1953.7072555387153,
      y: -785.6574266942414,
    },
    width: 272,
    height: 172,
    selected: false,
    positionAbsolute: {
      x: -1953.7072555387153,
      y: -785.6574266942414,
    },
    dragging: false,
  },
  {
    id: "3",
    type: "custom",
    data: {
      textOne: "Energy Meter - HT Transformer #1",
      textTwo: "Outgoing: 11 kv",
      imageUrl:
        "https://res.cloudinary.com/dqexqku43/image/upload/v1677184686/Group_29544_tctvfu.jpg",
    },
    position: {
      x: -1413.725941355393,
      y: -765.5639976108525,
    },
    width: 272,
    height: 172,
    selected: false,
    positionAbsolute: {
      x: -1413.725941355393,
      y: -765.5639976108525,
    },
    dragging: false,
  },
  {
    id: "4",
    type: "custom",
    data: {
      textOne: "Tower 1 RMU EM",
    },
    position: {
      x: -1701.757084383189,
      y: -521.5639976108525,
    },
    width: 272,
    height: 172,
    selected: false,
    positionAbsolute: {
      x: -1701.757084383189,
      y: -521.5639976108525,
    },
    dragging: false,
  },
  {
    id: "5",
    type: "custom",
    data: {
      textOne: "LT Transformer #1 (440V)",
      imageUrl:
        "https://res.cloudinary.com/dqexqku43/image/upload/v1677185241/Group_29538_fqglyw.jpg",
    },
    position: {
      x: -1998.3875427888815,
      y: -291.42696828854923,
    },
    width: 272,
    height: 172,
    selected: false,
    positionAbsolute: {
      x: -1998.3875427888815,
      y: -291.42696828854923,
    },
    dragging: false,
  },
  {
    id: "6",
    type: "custom",
    data: {
      textOne: "LT Transformer #2 (440V)",
      imageUrl:
        "https://res.cloudinary.com/dqexqku43/image/upload/v1677185241/Group_29538_fqglyw.jpg",
    },
    position: {
      x: -1351.9935969957999,
      y: -292.61929933344186,
    },
    width: 272,
    height: 172,
    selected: false,
    positionAbsolute: {
      x: -1351.9935969957999,
      y: -292.61929933344186,
    },
    dragging: false,
  },
  {
    id: "7",
    type: "custom",
    data: {
      textOne: "Energy Meter - Diesel Generator #1",
      textTwo: "Outgoing 2,873 kWh",
      imageUrl:
        "https://res.cloudinary.com/dqexqku43/image/upload/v1677178957/Group_29549_pjxpsd.jpg",
    },
    position: {
      x: -1035.9999167094015,
      y: -974.0000052056625,
    },
    width: 272,
    height: 172,
    selected: false,
    positionAbsolute: {
      x: -1035.9999167094015,
      y: -974.0000052056625,
    },
    dragging: false,
  },
  {
    id: "8",
    type: "custom",
    data: {
      textOne: "Energy Meter - UPS #1",
      textTwo: "Outgoing 2,873 kWh",
      imageUrl:
        "https://res.cloudinary.com/dqexqku43/image/upload/v1677180081/Group_29546_lhxjsi.jpg",
    },
    position: {
      x: -549.9999055544107,
      y: -970.0000052056625,
    },
    width: 272,
    height: 172,
    selected: false,
    positionAbsolute: {
      x: -549.9999055544107,
      y: -970.0000052056625,
    },
    dragging: false,
  },
  {
    id: "9",
    type: "custom",
    data: {
      textOne: "Energy Meter - Renewable energy #1",
      textTwo: "Outgoing 2,873 kWh",
      imageUrl:
        "https://res.cloudinary.com/dqexqku43/image/upload/v1677184600/Group_29547_gtvyfx.jpg",
    },
    position: {
      x: -56.00852742899315,
      y: -960.3021920084989,
    },
    width: 272,
    height: 172,
    selected: true,
    positionAbsolute: {
      x: -56.00852742899315,
      y: -960.3021920084989,
    },
    dragging: false,
  },
  {
    id: "10",
    type: "custom",
    data: {
      textOne: "Tower-1",
      textTwo: "Incomer: 1500 kWh",
      textThree: "Loss: 500 kWh",
      textFour: "Outgoing: 1000 kWh",
      imageUrl:
        "https://res.cloudinary.com/dqexqku43/image/upload/v1677185152/Group_29540_bgdoia.jpg",
    },
    position: {
      x: -981.9258814184552,
      y: -25.327463255978643,
    },
    width: 272,
    height: 172,
    selected: false,
    positionAbsolute: {
      x: -981.9258814184552,
      y: -25.327463255978643,
    },
    dragging: false,
  },
  {
    id: "11",
    type: "custom",
    data: {
      textOne: "HVAC",
      textTwo: "Consumption: 1500kWh",
      imageUrl:
        "https://res.cloudinary.com/dqexqku43/image/upload/v1677185380/Group_29548_nzefhe.jpg",
    },
    position: {
      x: -1817.786779948949,
      y: 319.995337813275,
    },
    width: 272,
    height: 172,
    selected: false,
    positionAbsolute: {
      x: -1817.786779948949,
      y: 319.995337813275,
    },
    dragging: false,
  },
  {
    id: "12",
    type: "custom",
    data: {
      textOne: "Lighting",
      textTwo: "Consumption: 1200kWh",
      imageUrl:
        "https://res.cloudinary.com/dqexqku43/image/upload/v1677185422/Group_29524_ejvseo.jpg",
    },
    position: {
      x: -838.3173376062305,
      y: 322.7394446014125,
    },
    width: 272,
    height: 172,
    selected: false,
    positionAbsolute: {
      x: -838.3173376062305,
      y: 322.7394446014125,
    },
    dragging: false,
  },
  {
    id: "13",
    type: "custom",
    data: {
      textOne: "Lab",
      textTwo: "Consumption: 1000kWh",
      imageUrl:
        "https://res.cloudinary.com/dqexqku43/image/upload/v1677185456/Group_29525_l7cjcb.jpg",
    },
    position: {
      x: -1331.7880780140267,
      y: 319.42438808891245,
    },
    width: 272,
    height: 172,
    selected: false,
    positionAbsolute: {
      x: -1331.7880780140267,
      y: 319.42438808891245,
    },
    dragging: false,
  },
  {
    id: "14",
    type: "custom",
    data: {
      textOne: "Server room",
      textTwo: "Consumption: 800kWh",
      imageUrl:
        "https://res.cloudinary.com/dqexqku43/image/upload/v1677185508/Group_29509_jnhhdl.jpg",
    },
    position: {
      x: -394.4232388101882,
      y: 317.8076852691222,
    },
    width: 272,
    height: 172,
    selected: false,
    positionAbsolute: {
      x: -394.4232388101882,
      y: 317.8076852691222,
    },
    dragging: false,
  },
];

const initEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "red", strokeWidth: 5 },
  },
  {
    id: "e1-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#9fa32c", strokeWidth: 5 },
    type: "smoothstep",
  },
  {
    id: "e1-4",
    source: "3",
    target: "4",
    animated: true,
    style: { stroke: "blue", strokeWidth: 5 },
  },
  {
    id: "e1-5",
    source: "4",
    target: "5",
    animated: true,
    style: { stroke: "red", strokeWidth: 5 },
  },
  {
    id: "e1-6",
    source: "4",
    target: "6",
    animated: true,
    style: { stroke: "#9fa32c", strokeWidth: 5 },
  },
  {
    id: "e1-7",
    source: "5",
    target: "10",
    animated: true,
    style: { stroke: "blue", strokeWidth: 5 },
  },
  {
    id: "e1-8",
    source: "5",
    target: "10",
    animated: true,
    style: { stroke: "red", strokeWidth: 5 },
  },
  {
    id: "e1-9",
    source: "7",
    target: "10",
    animated: true,
    style: { stroke: "#9fa32c", strokeWidth: 5 },
  },
  {
    id: "e1-10",
    source: "8",
    target: "10",
    animated: true,
    style: { stroke: "blue", strokeWidth: 5 },
  },
  {
    id: "e1-11",
    source: "9",
    target: "10",
    animated: true,
    style: { stroke: "red", strokeWidth: 5 },
  },
  {
    id: "e1-12",
    source: "10",
    target: "11",
    animated: true,
    style: { stroke: "#9fa32c", strokeWidth: 5 },
  },
  {
    id: "e1-13",
    source: "10",
    target: "12",
    animated: true,
    style: { stroke: "blue", strokeWidth: 5 },
  },
  {
    id: "e1-14",
    source: "10",
    target: "13",
    animated: true,
    style: { stroke: "red", strokeWidth: 5 },
  },
  {
    id: "e1-15",
    source: "10",
    target: "14",
    animated: true,
    style: { stroke: "#9fa32c", strokeWidth: 5 },
  },
  {
    id: "e1-16",
    source: "6",
    target: "10",
    animated: true,
    style: { stroke: "blue", strokeWidth: 5 },
  },
];

const Flow = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nodes, setNodes, onNodesChange] = useNodesState(init);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  console.log(nodes);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-teal-50"
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
