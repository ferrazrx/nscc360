import React, { Component } from "react";
import Map from "../Map";
import VR from "../VR";
import {
  DropdownContainer,
  FloorNav,
  TourContainer,
  MapContainer,
  MapButton
} from "./style";

export default class Tour extends Component {
  // Set initial state with currentScene (defin), mapOpened
  /*-----------------------------------------------
      currentScence : define current scene, is set to A wing, 2 floor, Front Entrance
      mapOpened: define if map view is opened ot not
     -----------------------------------------------*/

  state = {
    currentScene: { sceneID: "A_WING_2_FRONT_ENTRANCE", wing: "A", floor: "2" },
    mapOpened: false
  };

  // This function is passed to the maps to handle scene change (background image)
  /*-----------------------------------------------
      This function receive a new string with a new scene ID and set it to the state
     -----------------------------------------------*/

  handleSceneChange = newSceneID => {
    this.setState(prevState => ({
      ...prevState,
      currentScene: { ...prevState.currentScene, sceneID: newSceneID }
    }));
  };

  // This function handle the map change when the user change the floor.
  /*-----------------------------------------------
      This function receive the event from a click in the map option
      and get the dataset from the element to set a new state in this component.
     -----------------------------------------------*/

  handleWingChange = e => {
    const { wing, floor } = e.target.dataset;
    this.setState(prevState => ({
      ...prevState,
      currentScene: { ...prevState.currentScene, wing, floor }
    }));
  };

  render() {
    console.log(this.state);
    return (
      <TourContainer>
        {/* Map Button */}
        <MapButton
          onClick={() => this.setState({ mapOpened: !this.state.mapOpened })}
          size={this.state.mapOpened ? "true" : undefined}
        >
          {this.state.mapOpened ? (
            <i key={this.state.mapOpened} className="fas fa-times" />
          ) : (
            <i key={this.state.mapOpened} className="fas fa-map-marked-alt" />
          )}
        </MapButton>
        {/* Map */}
        <MapContainer opened={this.state.mapOpened}>
          <FloorNav opened={this.state.floorOpened}>
            <p className="text-center">Select a wing and a floor:</p>
            <DropdownContainer className="wings">
              <div className="dropdown">
                <div
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  A Wing
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    className="dropdown-item"
                    data-wing="A"
                    data-floor="1"
                    onClick={this.handleWingChange}
                  >
                    1st Floor
                  </a>
                  <a
                    className="dropdown-item"
                    data-wing="A"
                    data-floor="2"
                    onClick={this.handleWingChange}
                  >
                    2st Floor
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <div
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  B Wing
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    className="dropdown-item"
                    data-wing="B"
                    data-floor="1"
                    onClick={this.handleWingChange}
                  >
                    1st Floor
                  </a>
                  <a
                    className="dropdown-item"
                    data-wing="B"
                    data-floor="2"
                    onClick={this.handleWingChange}
                  >
                    2st Floor
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <div
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  C Wing
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    className="dropdown-item"
                    data-wing="C"
                    data-floor="1"
                    onClick={this.handleWingChange}
                  >
                    1st Floor
                  </a>
                  <a
                    className="dropdown-item"
                    data-wing="C"
                    data-floor="2"
                    onClick={this.handleWingChange}
                  >
                    2st Floor
                  </a>
                  <a
                    className="dropdown-item"
                    data-wing="C"
                    data-floor="3"
                    onClick={this.handleWingChange}
                  >
                    3st Floor
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <div
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  D Wing
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    className="dropdown-item"
                    data-wing="D"
                    data-floor="1"
                    onClick={this.handleWingChange}
                  >
                    1st Floor
                  </a>
                  <a
                    className="dropdown-item"
                    data-wing="D"
                    data-floor="2"
                    onClick={this.handleWingChange}
                  >
                    2st Floor
                  </a>
                  <a
                    className="dropdown-item"
                    data-wing="D"
                    data-floor="3"
                    onClick={this.handleWingChange}
                  >
                    3st Floor
                  </a>
                </div>
              </div>
            </DropdownContainer>
          </FloorNav>
          <Map
            scene={this.state.currentScene} // Pass the state to map so map component can render the proper scene
            handleSceneChange={this.handleSceneChange} //Pass the function handleSceneChange to map so when scene is selected the state is updated
          />
        </MapContainer>

        {/* React 360 iframe   */}
        <VR
          scene={this.state.currentScene.sceneID} // Pass the state to VR so the component can render the proper scene
        />
      </TourContainer>
    );
  }
}
