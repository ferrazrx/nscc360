import React, { Component } from "react";
import PropTypes from "prop-types";
import Awing from "../Wings/Awing";
import Bwing from "../Wings/Bwing";
import Cwing from "../Wings/Cwing";
import Dwing from "../Wings/Dwing";
import { WingContainer } from "./style";

export default class Map extends Component {
  static propTypes = {
    scene: PropTypes.shape({
      wing: PropTypes.string,
      floor: PropTypes.string,
      sceneID: PropTypes.string
    }).isRequired,
    handleSceneChange: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.WINGS = {
      A: Awing,
      B: Bwing,
      C: Cwing,
      D: Dwing
    };
  }

  handleClickScene = e => {
    this.props.handleSceneChange(e.target.dataset.sceneId);
  };

  render() {
    const { wing, floor } = this.props.scene;
    const Wing = this.WINGS[wing];

    return (
      <WingContainer>
        <Wing floor={floor} handleClickScene={this.handleClickScene} />
        <p className="text-center text-white">
          You are on <strong>{wing}</strong> wing - <strong>{floor}</strong>{" "}
          floor.
        </p>
      </WingContainer>
    );
  }
}
