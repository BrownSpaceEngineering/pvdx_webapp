import * as React from "react";
import "./block.css";
import Draggable from "react-draggable";

export default class Block extends React.Component<{}> {
  render() {
    return (
      <Draggable>
        <div className="block">This is a block</div>
      </Draggable>
    );
  }
}
