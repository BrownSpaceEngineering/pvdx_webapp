import * as React from "react";
import "./block.css";
import Draggable from "react-draggable";
import path from "path";

export default class Block extends React.Component<{ text: String }> {
  render() {
    return (
      <div>
        <Draggable>
          <div>
            <svg height="60" width="200">
              <path
                d="m 0 4 A 4 4 0 0 1 4 0 H 12 c 2 0 3 1 4 2 l 4 4 c 1 1 2 2 4 2 h 12 c 2 0
        3 -1 4 -2 l 4 -4 c 1 -1 2 -2 4 -2 H 149.227 a 4 4 0 0 1 4 4 v 40 a 4 4 0 0 1 -4 4 H 48 c -2 0 -3 1
         -4 2 l -4 4 c -1 1 -2 2 -4 2 h -12 c -2 0 -3 -1 -4 -2 l -4 -4 c -1 -1 -2 -2 -4 -2 H 4 a 4 4 0 0 1 -4 -4 Z"
                fill="#4aae9b"
              />
              <text x="7%" y="52%" className="text">
                {this.props.text}
              </text>
            </svg>
          </div>
        </Draggable>
      </div>
    );
  }
}
