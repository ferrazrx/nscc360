import React, { Component } from 'react'
import PropTypes from 'prop-types'
import A1Floor from './Floors/A1Floor'
import A2Floor from './Floors/A2Floor'

export default class Awing extends Component {
  static propTypes = {
    floor: PropTypes.string
  }

  constructor(props){
    super(props)
    this.FLOORS = {
      1: A1Floor,
      2: A2Floor,
    }
  }
  render() {
    const Floor = this.FLOORS[this.props.floor]
    return (
      <div>
        <Floor />
      </div>
    )
  }
}
