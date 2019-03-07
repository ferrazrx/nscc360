import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

export default class Buttons extends Component {
    
    static propTypes = {
        navigations: PropTypes.arrayOf(PropTypes.shape({
            to: PropTypes.string,
            txt: PropTypes.string,
            rotateX: PropTypes.number,
            rotateY: PropTypes.number,
            translate: PropTypes.array
        })),
        changePano: PropTypes.func
    }

    render() {
        if(this.props.navigations.length < 1) return null
        console.log(this.props.navigations)
        return (
            this.props.navigations.map( (nav, index) =>{
                return <Button key={index} nav={nav} changePano={this.props.changePano}/>
            }
        )
        )
    }
}
