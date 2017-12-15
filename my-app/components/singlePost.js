import React from 'react';
import { StyleSheet, Text, View , Image, FlatList, SectionList, TouchableWithoutFeedback, Linking} from 'react-native';
import Icon from  'react-native-vector-icons/FontAwesome';
const iconComment =(<Icon name="comment" size={18} color="rgb(159, 159, 159)"/>);
const iconAdult = (<Icon name="user" size={18} color="rgb(159, 159, 159)"/>);
const iconPlus = (<Icon name="plus" size={18} color="rgb(159, 159, 159)"/>);


class SinglePost extends React.Component {
    press = () =>{
        console.log(this.props.link);
        Linking.openURL(this.props.link).catch(err => console.error('An error occurred', err));
    }
    render(){
        return (
        <TouchableWithoutFeedback onPress={this.press} link={this.props.link}>
            <View style={item.container}>
                <View style={item.imageBox}>
                    <Image

                        style={{width:null, height:null,flex:1}}
                        source = {{uri:`${this.props.imageSrc}`}}
                        resizeMode='contain'
                          />
                      <Text>{iconComment}{this.props.comments}</Text>
                </View>
                <View style={item.content}>
                    <View style={item.titleBox}>
                        <Text  style={item.title}>{this.props.title}</Text>
                        <View style={item.footer}>
                            <Text>{iconAdult} {this.props.author}</Text>
                            <Text>{iconPlus}{this.props.score}</Text>

                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
        )
    }
}




const item = StyleSheet.create({
    container:{
        width: 'auto',
        height:110,
        borderBottomWidth:0.5,
        borderTopWidth:0.5,
        borderColor: 'rgb(159, 159, 159)',
        flexDirection:'row'
    },
    imageBox:{
        height:110,
        width:90,
        // borderWidth:1,
        borderColor:'black'
    },
    content:{
        flex:1,
        height:110,
        // borderWidth:1,
        borderColor:'red'
    },
    titleBox:{
        justifyContent:'space-between',
        flex:1
    },
    title:{
        fontSize:16,
        fontWeight:'bold'
    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})


export default SinglePost;
