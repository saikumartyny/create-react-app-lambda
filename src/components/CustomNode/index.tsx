import React, { useState } from "react";
import { Handle, useReactFlow, useStoreApi, Position } from "reactflow";

import "./styles.css";

const CustomNode = (data: any) => {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();
  const { nodeInternals } = store.getState();
  const [value, setValue] = useState("");

  const onDeleteNode = (id: string) => {
    setNodes(
      Array.from(nodeInternals.values()).filter(
        (eachNode) => eachNode.id !== id
      )
    );
  };

  const onUpdate = (id: string) => {
    setNodes(
      Array.from(nodeInternals.values()).map((eachNode) =>
        eachNode.id === id
          ? { ...eachNode, data: { ...eachNode.data, textOne: value } }
          : eachNode
      )
    );
  };

  return (
    <div className="node">
      {data?.selected && (
        <div className="options">
          <button
            type="button"
            onClick={() => onDeleteNode(data?.id)}
            className="delete-btn"
          >
            Delete Node
          </button>
          <input
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={() => onUpdate(data?.id)}
            type="button"
            className="delete-btn"
          >
            Update
          </button>
        </div>
      )}
      <img alt="" src={data?.data?.imageUrl} className="node-img" />
      <div
        style={{
          width: "60%",
        }}
      >
        <p className="text">{data?.data?.textOne}</p>
        <p className="text">{data?.data?.textTwo}</p>
        <p className="text">{data?.data?.textThree}</p>
        <p className="text">{data?.data?.textFour}</p>
      </div>
      <Handle type="target" position={Position.Top} className="top-node" />
      <Handle
        type="source"
        position={Position.Bottom}
        className="bottom-node"
      />
    </div>
  );
};

export default CustomNode;
