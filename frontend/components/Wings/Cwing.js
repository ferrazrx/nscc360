import React, { Component } from "react";
import PropTypes from "prop-types";
import C1Floor from "./Floors/C1Floor";
import C2Floor from "./Floors/C2Floor";
import C3Floor from "./Floors/C3Floor";

export default class Cwing extends Component {
  static propTypes = {
    scene: PropTypes.shape({
      wing: PropTypes.string,
      floor: PropTypes.string,
      sceneID: PropTypes.string
    }).isRequired,
    handleClickScene: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.FLOORS = {
      1: C1Floor,
      2: C2Floor,
      3: C3Floor
    };
  }
  render() {
    const Floor = this.FLOORS[this.props.scene.floor];
    return <Floor {...this.props} />;
  }
}
