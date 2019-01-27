import React, { Component } from 'react'
import PropTypes from 'prop-types'
import D1Floor from './Floors/D1Floor'
import D2Floor from './Floors/D2Floor'
import D3Floor from './Floors/D3Floor'

export default class Dwing extends Component {
    static propTypes = {
        floor: PropTypes.string
    }

    constructor(props){
        super(props)
        this.FLOORS = {
            1: D1Floor,
            2: D2Floor,
            3: D3Floor,
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