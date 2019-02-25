import React, { Component } from "react";
import { IFrame, IFrameContainer } from "./style";
import PropTypes from "prop-types";

export default class VR extends Component {
  static propTypes = {
    scene: PropTypes.string.isRequired
  };

  renderIframe = () => {
    return (
      <IFrame
        key={this.props.scene}
        className="w-100 border-0 shadow"
        src={`/vr/index.html#${this.props.scene}`}
        //src={`http://localhost:8081/index.html#${this.props.scene}`}
      />
    );
  };
  render() {
    console.log(this.props);
    return <IFrameContainer>{this.renderIframe()}</IFrameContainer>;
  }
}
