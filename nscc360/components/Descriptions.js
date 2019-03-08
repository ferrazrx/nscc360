import React, { Component } from 'react'
import { View, Text, VrButton, Image, asset } from 'react-360';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

export default class Buttons extends Component {
    
    static propTypes = {
        descriptions: PropTypes.arrayOf(PropTypes.shape({
            txt: PropTypes.string,
            rotateX: PropTypes.number, 
            rotateY: PropTypes.number, 
            translate: PropTypes.arrayOf(PropTypes.number)
        }))
    }

    constructor(props){
        super(props);

        this.scale = new Animated.Value(0.00001)
    }

    showDescription = ()=>{
        Animated.timing(
            // Animate value over time
            this.scale, // The value to drive
            {
              toValue: 1, // Animate to final value of 1
              duration: 300
            },
          ).start(); // Start the animation
    }

    hiddenDescription = ()=>{
        Animated.timing(
            // Animate value over time
            this.scale, // The value to drive
            {
              toValue: 0.00001, // Animate to final value of 1
              duration: 300
            },
          ).start(); // Start the animation
    }

    renderDescriptions = ()=>{
        if(this.props.descriptions.length < 1) return null
        return this.props.descriptions.map(({ translate, rotateX, rotateY, txt }, index)=>{

        return ( 
            <View 
                key={index}
                style={{
                    maxWidth: 7,
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 0.2,
                    transform: [
                        {translate},
                        {rotateX},
                        {rotateY},
                    ]
            }}> 
                <Animated.View style={{
                    width: 5,
                    backgroundColor: '#FFF',
                    padding: 0.3,
                    position: 'absolute',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    transform: [
                        {scale: this.scale},
                        {translateZ: 0.3},
                        {translateX: 1}
                    ],
                }}>
                    <Text
                        style={{
                            fontSize: 0.3,
                            fontWeight: '100',
                            color: "#000" 
                        }}>
                        {txt}
                    </Text>
                </Animated.View>
                <VrButton
                onEnter={this.showDescription}
                onExit={this.hiddenDescription}
               >
                    <Image
                        style={{
                            width: 0.5,
                            height: 0.5,
                        }} 
                        source={asset('info.png')} 
                    />
                </VrButton>
            </View>
        )
        })
    }

  render() {
    return (
      this.renderDescriptions()
    )
  }

}