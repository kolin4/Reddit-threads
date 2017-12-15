import React from 'react';
import { StyleSheet, Text, View , Image, FlatList, SectionList, ScrollView} from 'react-native';

import SinglePost from './singlePost';

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
        console.log(this.state.allTopics);
        const data = this.state.allTopics.map( (elem,index)=>{
            return (
                <SinglePost link={elem.link}  key={index} title={elem.title} author={elem.author} imageSrc={elem.imageSrc} score={elem.score} comments={elem.comments}/>
            )
        })
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
                    <Text  style={styles.headerText}>Latest Threads</Text>

                </View>
                <ScrollView>
                    {data}

                </ScrollView>
            </View>
        )
    }
}


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
