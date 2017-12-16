import React from 'react';
import { StyleSheet, Text, View , Image, ScrollView, AsyncStorage} from 'react-native';
import Error from './error';
import SinglePost from './singlePost';

class MainApp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            allTopics:[],
            isData: true
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
            AsyncStorage.setItem('data', JSON.stringify(topic));
            this.setState({
                allTopics:topic
            })

        })
        .catch( (error) =>{
                try {
                    AsyncStorage.getItem('data')
                    .then(value => {

                        if ( value !== null){
                            this.setState({
                                allTopics:JSON.parse(value)
                            })
                        } else {
                            this.setState({
                                isData:false
                            })
                        }
                    })
                } catch (error){
                    this.setState({
                        isData:false
                    })
                }
        })
    }

    render(){
        let data;
        if (this.state.isData === true){
            data = this.state.allTopics.map( (elem,index)=>{
                return (
                    <SinglePost link={elem.link}  key={index} title={elem.title} author={elem.author} imageSrc={elem.imageSrc} score={elem.score} comments={elem.comments}/>
                )
            })

        } else {
            data = <Error />
        }
        return (
            <View>
                <View style={styles.logo}>
                    <Image
                        style={{width:null, height:null,flex:1}}
                        source = {require('../images/redditLogo.png')}
                        resizeMode='contain'
                          />
                </View>

                <ScrollView style={{marginBottom:75, paddingTop:10}}>
                    {data}

                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    logo :{
        shadowOffset:{
            width: 10,
            height: 10,
        },
        shadowColor: 'red',
        height:70,

    },
    headerText :{
        marginTop:10,
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
