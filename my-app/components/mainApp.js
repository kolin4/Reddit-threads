import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';


class MainApp extends React.Component {

    render(){
        return (
            <View>
                <View style={{height:70, borderWidth:1,borderColor:'black' }}>
                    <Image
                        style={{width:null, height:null,flex:1}}
                        source = {require('../images/redditLogo.png')}
                        resizeMode='contain'
                          />
                </View>
                <View>
                    <Text>Open up App.js to start working on your app!</Text>
                    <Text>asdads sprawdzmy</Text>
                    <Text>EEEE no panie zajebioza </Text>
                </View>js
            </View>
        )
    }
}


export  default MainApp;
