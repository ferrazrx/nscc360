import React, { Component } from 'react'
import { Linking } from 'react-native'
import { View, asset, VrButton, Text } from 'react-360';
import PropTypes from 'prop-types'
import Pano from './Pano'
import Buttons from './Buttons';
import Title from './Title';
import Descriptions from './Descriptions';

export default class App extends Component {
    static propTypes = {
        tour: PropTypes.string.isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            urlLinkId: null, 
            tour: null,
            loading: true
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
        this.setState({
            tour,
            loading: false
        })
    }

     /*-----------------------------------------------
            Get the JSON that define all the scenes for the app
       -----------------------------------------------*/

    getTourDefinitions = async()=>{
        const response = await fetch(asset(this.props.tour).uri);
        if(!response) throw new Error('Error: tour.json file was not found in the static folder. Please, move your json file to the proper folder.')
        return response.json();
    }
    
    changePano = (newScene)=>{
        this.setState({
            urlLinkId: newScene
        })
    }

    renderScene(){
        let scene = null
        
        if(!this.state.loading){
            const { firstScene, scenes } = this.state.tour
            if(this.state.urlLinkId){
                scene = scenes.find((scene)=> scene.id === this.state.urlLinkId.toUpperCase())
            }
            else if(firstScene){
                scene = scenes.find((scene)=> scene.id === firstScene)
            }else{
                scene = scenes[0]
            }
        }
        return (
            this.state.loading ?
            <Text
                style={{
                    fontSize: 0.2,
                    fontWeight: '400',
                    textAlign: 'center',
                    fontWeight: '900',
                    transform: [
                        {translate: [-0.5,0,-4]}
                    ]
                }}>
                Loading...
            </Text>
            :
            <View>
                <Pano scene={scene} />
                <Title title={scene.title} />
                <Buttons navigations={scene.navigations} changePano={this.changePano}/>
                <Descriptions descriptions={scene.descriptions}/>
            </View>
        )
    }

    render(){
        return this.renderScene()
    }
}
