import React, { Component } from "react";
import {
  View,
  Text
} from "native-base";
import { Image, TouchableOpacity ,Linking} from "react-native";
import styles from "./styles";
import axios from "axios";

export default class DataTable extends React.Component {
  
state = {
  news:[]
}

constructor(props){
  super(props);
  this.getNews();
  
}

async getNews(){
  await axios.get('https://newsapi.org/v2/everything?q=recycle-plastics&from=2019-07-01&sortBy=publishedAt&apiKey=b52bfccec2384a02bcd078d67b16c671')
  .then(res=>{
    
    this.setState({news:res.data.articles});
  })
  .catch(err=>{console.log(err)})
}
 
  render() {
    
    const arrayOfNews = [];
    for(var i = 2; i < this.state.news.length; i++){
      const index = i;
      if(this.state.news[index].content.includes("recycle") || this.state.news[index].content.includes("waste") || this.state.news[index].content.includes("plastic") || this.state.news[index].content.includes("trash")){
        arrayOfNews.push(
          <TouchableOpacity style={styles.cont} onPress={() => {Linking.openURL(this.state.news[index].url).catch(err => console.error('An error occurred', err));}}>
            <View style={styles.row}>
              <Image blurRadius={1} source={{uri:this.state.news[index].urlToImage}} style={{width:"100%", height: 200, borderRadius:10}}/>
              <View style={{flexDirection:"column"}}>
                <Text style={{fontWeight: 'bold', margin:4}}>{this.state.news[index].title}</Text>
                <Text>"{this.state.news[index].description}"</Text>
                <Text style={{margin:4, fontSize:10}}>Published on: {this.state.news[index].publishedAt.substring(0,10)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      }   
    }
    
    return (
      <View style={{backgroundColor:"#CDF1CD"}} >
          {arrayOfNews}
      </View>
    );
  }
}


