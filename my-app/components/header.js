import React from 'react';
import { StyleSheet, Image, Text, View} from 'react-native';


class Header extends React.Component{
    render(){
        return(
            <View style={{flex:1, flexDirection:'row'}}>
                <Image

                    source = {require('../images/redditLogo.png')}
                    resizeMode='cover'
                    />
                <Text>naglowek</Text>
            </View>


        )
    }
}

export default Header;
