import React, { Component } from 'react';
import { View, Text } from 'react-360';
import PropTypes from 'prop-types';


export default class Title extends Component {
    
    static propTypes = {
        title: PropTypes.shape({
            translate: PropTypes.arrayOf(PropTypes.number),
            rotateX: PropTypes.number, 
            rotateY: PropTypes.number, 
            txt: PropTypes.string
        })
    }
    
    renderTitle = ()=>{
        if(!this.props.title) return null
        
        const { translate, rotateX, rotateY, txt } = this.props.title;
        return ( 
            <View style={{
                maxWidth: 2.5,
                display: 'flex',
                justifyContent: 'center',
                padding: 0.2,
                backgroundColor: '#FFF',
                transform: [
                    {translate },
                    {rotateX},
                    {rotateY},
                ]
            }}>
                <Text
                    style={{
                        fontSize: 0.2,
                        fontWeight: '400',
                        textAlign: 'center',
                        fontWeight: '900',
                        color: "#3B4359",
                    }}>
                    {txt.toUpperCase()}
                </Text>
            </View>
            
        )
    }
  render() {
    return (
      this.renderTitle()
    )
  }
}
