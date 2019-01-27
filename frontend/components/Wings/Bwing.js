import React, { Component } from 'react'
import PropTypes from 'prop-types'
import B1Floor from './Floors/B1Floor'
import B2Floor from './Floors/B2Floor'

export default class Bwing extends Component {
  static propTypes = {
    floor: PropTypes.string
  }

  constructor(props){
    super(props)
    this.FLOORS = {
      1: B1Floor,
      2: B2Floor,
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
