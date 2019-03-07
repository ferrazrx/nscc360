import React, { Component } from 'react'
import { View, VrButton, Text } from 'react-360';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

export default class Buttons extends Component {

    constructor(props){
        super(props);
        this.scale = new Animated.Value(1);
    }

    scaleButtonUp = ()=>{
        Animated.timing(
            // Animate value over time
            this.scale, // The value to drive
            {
              toValue: 1.5, // Animate to final value of 1
              duration: 300
            },
          ).start(); // Start the animation
    }

    scaleButtonDown = ()=>{
        Animated.timing(
            // Animate value over time
            this.scale, // The value to drive
            {
              toValue: 1, // Animate to final value of 1
              duration: 300
            },
          ).start(); // Start the animation
    }

    render() {
        const nav = this.props.nav
        return (
            <VrButton
                onClick={()=> this.props.changePano(nav.to)}
                style={{
                   transform:[
                        {translate: nav.translate },
                        {rotateX: nav.rotateX},
                        {rotateY: nav.rotateY}
                    ]
                }}
            >
                <Animated.View style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: 1.6, 
                    height: 1.6,                               
                    borderRadius: 50,
                    borderWidth: 0.05,
                    borderColor: '#F55',
                    transform:[
                        {translateZ: this.scale},
                    ]
                }}
               
                onEnter={this.scaleButtonUp}
                onExit={this.scaleButtonDown}
                >
                    <Text
                        style={{
                            fontSize: 0.2,
                            fontWeight: '400',
                            textAlign: 'center',
                            fontWeight: '900'
                        }}>
                        {nav.txt.toUpperCase()}
                    </Text>
                </Animated.View>
            </VrButton>
        )
    }
}
