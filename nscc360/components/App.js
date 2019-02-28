import React, { Component } from 'react'
import { Linking } from 'react-native'
import { View, asset, Pano, Sphere, VrButton, Image, Text, Environment } from 'react-360';
import PropTypes from 'prop-types'

export default class App extends Component {
    static propTypes = {
        tour: PropTypes.string.isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            urlLinkId: "A_WING_2_FRONT_ENTRANCE", 
            tour: null,
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

            const { rotateX, rotateY } = initialScene


            Environment.setBackgroundImage(asset(initialScene.background), {
                format: '2D',
                rotateTransform: [{ rotateX }, { rotateY }]
            });
    }
    
    changePano = (newScene)=>{
        console.log(newScene)
        console.log(this.state)
        this.setState({
            urlLinkId: newScene
        })
    }

    renderTitle = ()=>{
        let initialScene = null

        const { tour: { firstScene, scenes }, urlLinkId } = this.state
        if(urlLinkId){
            initialScene = scenes.find((scene)=> scene.id === urlLinkId.toUpperCase())
        }
        else if(firstScene){
            initialScene = scenes.find((scene)=> scene.id === firstScene)
        }else{
            initialScene = scenes[0]
        }
        if(!initialScene.title){
            return null;
        }
        return ( 
            <View style={{
                display: 'flex',
                justifyContent: 'center',
                padding: 0.2,
                backgroundColor: '#FFF',
                transform: [
                    {translate: initialScene.title.translate },
                    {rotateX: initialScene.title.rotateX},
                    {rotateY: initialScene.title.rotateY},
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
                    {initialScene.title.txt.toUpperCase()}
                </Text>
            </View>
        )
    }

    renderButtons = ()=>{

            let initialScene = null

            const { tour: { firstScene, scenes }, urlLinkId } = this.state
            if(urlLinkId){
                initialScene = scenes.find((scene)=> scene.id === urlLinkId.toUpperCase())
            }
            else if(firstScene){
                initialScene = scenes.find((scene)=> scene.id === firstScene)
            }else{
                initialScene = scenes[0]
            }


            return initialScene.navigations.map( (nav, index) =>{
                return(
                    <VrButton
                    key={index}
                    style={{
                        transform: [
                            {translate: nav.translate },
                            {rotateX: nav.rotateX},
                            {rotateY: nav.rotateY},
                        ]
                    
                    }}
                    onClick={()=> this.changePano(nav.to)}
                    >
                        <View style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: 1.6, 
                            height: 1.6,                               
                            borderRadius: 50,
                            borderWidth: 0.05,
                            borderColor: '#F55',
                        }}
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
                        </View>
                    </VrButton>
                )
            })
    }

    render() {
        return (
            <View>
                { this.state.tour && this.renderPano()}
                { this.state.tour && this.renderTitle()}
                { this.state.tour && this.renderButtons()}
            </View>
        )
    }
}
