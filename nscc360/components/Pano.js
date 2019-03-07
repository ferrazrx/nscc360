import React, { Component } from 'react'
import { View, asset, Environment } from 'react-360';
import PropTypes from 'prop-types';

export default class Pano extends Component {
    static propTypes = {
        scene: PropTypes.shape({
            background: PropTypes.string,
            rotateX: PropTypes.number,
            rotateY: PropTypes.number,
        })
    }
    

    /*-----------------------------------------------
        Render defined first scene or first item from the array
    -----------------------------------------------*/
    renderPano = ()=>{

        const { rotateX, rotateY } = this.props.scene


        Environment.setBackgroundImage(asset(this.props.scene.background), {
            format: '2D',
            rotateTransform: [{ rotateX }, { rotateY }]
        });
    }
  render() {
    return (
      <View>
        {this.renderPano()}
      </View>
    )
  }
}
