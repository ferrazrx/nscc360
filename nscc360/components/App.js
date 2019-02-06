import React, { Component } from 'react'
import { Linking } from 'react-native'
import { View, asset, Pano } from 'react-360';
import PropTypes from 'prop-types'

export default class App extends Component {
    static propTypes = {
        tour: PropTypes.string.isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            urlLinkId: null, 
            tour: null
        }
    }

    componentWillMount = async()=>{
        /*-----------------------------------------------
            Get URL link after # symbol
        -----------------------------------------------*/
        let url = await Linking.getInitialURL();
        const urlLinkId = url.split('#')[1];
        if( urlLinkId ) {
            this.setState({ urlLinkId });
        }
        const tour = await this.getTourDefinitions();
        if( tour ){
            this.setState({ tour })
        }
    }

     /*-----------------------------------------------
            Get the JSON that define all the scenes for the app
       -----------------------------------------------*/

    getTourDefinitions = async()=>{
        const response = await fetch(asset(this.props.tour).uri);
        if(!response) throw new Error('Error: tour.json file was not found in the static folder. Please, move your json file to the proper folder.')
        return await response.json();
    }

    /*-----------------------------------------------
            Render defined first scene or first item from the array
      -----------------------------------------------*/
    renderPano = ()=>{
        if(this.state.tour){
            const { tour: { firstScene, scenes }, urlLinkId } = this.state
            let initialScene = null
            if(urlLinkId){
                initialScene = scenes.find((scene)=> scene.id === urlLinkId.toUpperCase())
            }
            else if(firstScene){
                initialScene = scenes.find((scene)=> scene.id === firstScene)
            }else{
                initialScene = scenes[0]
            }
            console.log(initialScene)
            const { rotateX, rotateY } = initialScene

            let panoStyle = {transform:[{rotateX},{rotateY}]}
            console.log(panoStyle)

            return <Pano style={panoStyle} source={asset(initialScene.background)} />
        }
    }

    render() {
        return (
            <View>
                {this.renderPano()}
            </View>
        )
    }
}
