import React from 'react';
import { StyleSheet, Text, View , Image, FlatList, SectionList} from 'react-native';
import Icon from  'react-native-vector-icons/FontAwesome';
const iconComment =(<Icon name="comment" size={18} color="rgb(159, 159, 159)"/>);
const iconAdult = (<Icon name="user" size={18} color="rgb(159, 159, 159)"/>);
const iconPlus = (<Icon name="plus" size={18} color="rgb(159, 159, 159)"/>);

class MainApp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            allTopics:[]
        }
    }
    componentDidMount(){
        fetch('https://www.reddit.com/.json')
        .then(response =>response.json())
        .then(responseJSON => {

            let topic=[];
            const data = responseJSON.data.children;

            for ( let i = 0; i<data.length;i++){
                let singleTopic = {
                    title: data[i].data.title,
                    author:data[i].data.author,
                    imageSrc: data[i].data.thumbnail,
                    link: `http://www.reddit.com${data[i].data.permalink}`,
                    score: data[i].data.score,
                    comments: data[i].data.num_comments
                }

                topic.push(singleTopic);

            }
            this.setState({
                allTopics:topic
            })

        })
        .catch( (error) =>{
                console.log(error);
        })

    }

    render(){
        console.log(this.state.allTopics[0]);
        // const data = this.state.allTopics.map( (elem,index)=>{
        //     return (
        //         <Text key={index}>{elem.title}{elem.author}{elem.link}</Text>
        //     )
        // })
        return (
            <View>
                <View style={{height:70, borderWidth:1,borderColor:'black' }}>
                    <Image
                        style={{width:null, height:null,flex:1}}
                        source = {require('../images/redditLogo.png')}
                        resizeMode='contain'
                          />
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.headerText}>Latest Threads</Text>

                </View>
                <View style={item.container}>
                    <View style={item.imageBox}>
                        <Image
                            style={{width:null, height:null,flex:1}}
                            source = {{uri:'https://b.thumbs.redditmedia.com/gdvgJFh_clO5so1S4Hq8AXjGP-skzMEEu6zD47MWx2o.jpg'}}
                            resizeMode='contain'
                              />
                          <Text>{iconComment}21888</Text>
                    </View>
                    <View style={item.content}>
                        <View style={item.titleBox}>
                            <Text style={item.title}>Przykladowy tytul o kaczkch bocianach rysiach kunach i jeleniach</Text>
                            <View style={item.footer}>
                                <Text>{iconAdult} Jeremy</Text>
                                <Text>{iconPlus}1450</Text>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
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

const styles = StyleSheet.create({

    headerText :{
        fontSize:24
    },

    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',

    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
export  default MainApp;
