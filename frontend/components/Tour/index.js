import React, { Component } from 'react'
import Map from '../Map';
import VR from '../VR';
import { DropdownContainer } from "./style"

export default class Tour extends Component {
    state= {
        currentScene: { wing: "A", floor: "1"}
    }

    handleWingChange = (e)=>{
        const {wing, floor} = e.target.dataset
        this.setState((prevState)=>({...prevState, currentScene: {wing, floor}}))
    }

  render() {
    console.log(this.state)
    return (
    <> 
      <p className="text-center">Select a wing and a floor:</p>
      <DropdownContainer className="wings">
        <div className="dropdown">
            <div className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                A Wing
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" data-wing="A" data-floor="1" onClick={this.handleWingChange}>1st Floor</a>
                <a className="dropdown-item" data-wing="A" data-floor="2" onClick={this.handleWingChange}>2st Floor</a>
            </div>
        </div>
        <div className="dropdown">
            <div className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                B Wing
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" data-wing="B" data-floor="1" onClick={this.handleWingChange}>1st Floor</a>
                <a className="dropdown-item" data-wing="B" data-floor="2" onClick={this.handleWingChange}>2st Floor</a>
            </div>
        </div>
        <div className="dropdown">
            <div className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                C Wing
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" data-wing="C" data-floor="1" onClick={this.handleWingChange}>1st Floor</a>
                <a className="dropdown-item" data-wing="C" data-floor="2" onClick={this.handleWingChange}>2st Floor</a>
                <a className="dropdown-item" data-wing="C" data-floor="3" onClick={this.handleWingChange}>3st Floor</a>
            </div>
        </div>
        <div className="dropdown">
            <div className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                D Wing
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" data-wing="D" data-floor="1" onClick={this.handleWingChange}>1st Floor</a>
                <a className="dropdown-item" data-wing="D" data-floor="2" onClick={this.handleWingChange}>2st Floor</a>
                <a className="dropdown-item" data-wing="D" data-floor="3" onClick={this.handleWingChange}>3st Floor</a>
            </div>
        </div>
      </DropdownContainer>  
      <div className="row pt-5">
        <div className="col-md-6">
            {/* <VR /> */}
        </div>
        <div className="col-md-6">
            <Map scene={this.state.currentScene}/>
        </div>
      </div>
    </>
    )
  }
}
