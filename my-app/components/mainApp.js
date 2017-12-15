import React from 'react';
import { StyleSheet, Text, View , Image, FlatList, SectionList} from 'react-native';


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
                        <Text>comments</Text>
                    </View>
                    <View style={item.content}>
                        <View style={item.title}>Przykladowy tytul</View>
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
        borderWidth:1,
        borderColor: 'black',
        flexDirection:'row'
    },
    imageBox:{
        height:110,
        width:90,
        borderWidth:1,
        borderColor:'black'
    },
    content:{
        flex:1,
        height:110,
        borderWidth:1,
        borderColor:'red'
    },
    title:{

    }
})

const styles = StyleSheet.create({

    headerText :{
        fontSize:42
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
