import React, { Component } from "react";
import axios from 'axios'
import {
  Container,
  Header,
  Content,
  View,
  Text
} from "native-base";
import { Image , Button ,TextInput, Alert} from "react-native";
import styles from "./styles";
const backgroundImg = require("../../../assets/default_profile.png");
import NavBar from "../subComponents/NavBar";

export default class Challenges extends React.Component {
  
constructor(props){
  super(props);
  this.state = { challenges: [
  ],loading:true,username:'', points:0, hamada:false };
}
async componentDidMount(){
  await axios({
    method:'POST',
    url:'https://recyco.herokuapp.com/api/challenges/viewmychallenges'
  }).then(res=>{
    var myChallenges=[]
    console.log(res.data.data)
    for(var i=0;i<res.data.data.length;i++) {
     
      myChallenges.push({
        id:res.data.data[i]._id,
        name:res.data.data[i].name,
        description:res.data.data[i].description,
        points:res.data.data[i].points,
        deadline:res.data.data[i].deadline,
        status:res.data.data[i].status
      })

    }
    
    this.setState({challenges:myChallenges,loading:false})
  }).catch(err=>{
    alert(err)
  })
  await axios({
    method:'POST',
    url:'https://recyco.herokuapp.com/api/users/dashboard'
  }).then(res=>{
    this.setState({username:res.data.data.username,points:res.data.data.points})
  })

}
async handleClaim(id){
  await axios({
    method:'POST',
    url:'https://recyco.herokuapp.com/api/challenges/claim',
    data:{id:id}
  }).then(res=>{
    console.log(res)
    this.setState({hamada:true})
    alert('Successfull')
  }).catch(err=>[
    console.log(err),
    alert(err)
  ])
await this.componentDidMount()
}


  render() {
    if(!this.state.loading){
    const { props: { name, index, list } } = this;
    const arrayOfChallenges =[];
    for(var i = 0; i < this.state.challenges.length; i++){
      const index = i;
      const buttonComponent = [];

      if(this.state.challenges[index].status == "TBC")
        buttonComponent.push(<Button title="Claim Points" color="green" onPress={() => {this.handleClaim(this.state.challenges[index].id)}}/>)

      if(this.state.challenges[index].status == "C")
        buttonComponent.push(<Button title="Points claimed!" color="green" />)
      
      if(this.state.challenges[index].status == "PENDING")
        buttonComponent.push(<Button title="In progress..." color="green" />)
        
      arrayOfChallenges.push(
        <View style={styles.row}>
            <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} style={{width:80, height:80, borderRadius:10}}/>
            <View>
            <Text style={{fontWeight: 'bold',paddingTop:"2%", marginLeft:"2%"}}>{this.state.challenges[index].name}</Text>
            <Text style={{marginLeft:"3%",marginTop:"4%", width:150}}>{this.state.challenges[index].description}</Text>
            <Text style={{marginLeft:"3%",marginTop:"4%"}}>Points: {this.state.challenges[index].points}</Text>
            </View>  
            {buttonComponent}
        </View>
      );
    }
  
  return (
    <Container style={styles.container}>
      <Content style={{height: "20%"}}>
      <View style={{width:"100%"}}><Text style={{fontSize:20, fontWeight: 'bold',margin:7, color:'green'}}>Challenges</Text></View>
        {arrayOfChallenges}
      </Content>
      <NavBar nav={this.props.navigation}/>
    </Container>
    
  );
}
else{
  return (<Text>Loading...</Text>)
}
}

}