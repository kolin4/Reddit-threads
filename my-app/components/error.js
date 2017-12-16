import React from 'react';
import { StyleSheet, Text, View , Image, Button} from 'react-native';

class Error extends React.Component {
    render(){
        return (
            <View style={{flex:1,alignItems:'center', justifyContent:'space-between', marginTop:20}}>
                <Text>Sorry no internet connection or stored data.</Text>
                <Button
                    title='Refresh'
                    onPress={this.props.refresh}
                    />

            </View>
        )
    }
}

export default Error;
