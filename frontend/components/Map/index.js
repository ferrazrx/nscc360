import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Awing from '../Wings/Awing'
import Bwing from '../Wings/Bwing'
import Cwing from '../Wings/Cwing'
import Dwing from '../Wings/Dwing'

export default class Map extends Component {
    
    static propTypes = {
    scene: PropTypes.shape({
        wing: PropTypes.string,
        floor: PropTypes.string
        }).isRequired
    }
  
    constructor(props){
        super(props)
        this.WINGS = {
            A: Awing,
            B: Bwing,
            C: Cwing,
            D: Dwing
        }
    }
  render() {
    const {wing, floor} = this.props.scene
    const Wing = this.WINGS[wing]

    return (
      <div>
        <p>{`You are on ${wing} wing - ${floor} floor.`}</p>
        <Wing floor={floor}/>
      </div>
    )
  }
}
