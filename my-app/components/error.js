import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

class Error extends React.Component {
    render(){
        return (
            <View style={{flex:1,alignItems:'center', justifyContent:'space-between'}}>
                <Image
                    style= {{width:300,height:300}}
                    source = {require('../images/brokenReddit.jpg')}
                    resizeMode='contain'
                    />
                <Text>Sorry no internet connection or stored data.</Text>
            </View>
        )
    }
}

export default Error;
