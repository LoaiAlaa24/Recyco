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

export default class Appointments extends React.Component {
  
constructor(props){
  super(props);
  this.state = { appointments: [
  ],loading:false,username:'', points:0, hamada:false };
}
async componentDidMount(){
  await axios({
    method:'POST',
    url:'https://recyco.herokuapp.com/api/appointments/viewmyappointments'
  }).then(res=>{
    var myAppointments=[]
    console.log(res.data.data)
    for(var i=0;i<res.data.data.length;i++) {
     
      myAppointments.push({
        id:res.data.data[i]._id,
        date_of_appointment:res.data.data[i].date_of_appointment,
        status:res.data.data[i].status
        // points:res.data.data[i].points,
        // deadline:res.data.data[i].deadline,
        // status:res.data.data[i].status
      })

    }
    
    this.setState({appointments:myAppointments})
  }).catch(err=>{
    console.log(err)
  })
  await axios({
    method:'POST',
    url:'https://recyco.herokuapp.com/api/users/dashboard'
  }).then(res=>{
    this.setState({username:res.data.data.username,points:res.data.data.points,loading:false})
  })

}
async handleClaim(id){
  await axios({
    method:'POST',
    url:'https://recyco.herokuapp.com/api/appointments/appointmentdone',
    data:{id:id}
  }).then(res=>{
    console.log(res)
    this.setState({hamada:true})
    alert('Successfull')
  }).catch(err=>[
    console.log(err),
  ])
await this.componentDidMount()
}


  render() {
    if(!this.state.loading){
    const { props: { name, index, list } } = this;
    const arrayOfappointments =[];
    for(var i = 0; i < this.state.appointments.length; i++){
      const index = i;
      const buttonComponent = [];

      if(this.state.appointments[index].status === "DONE"){
        buttonComponent.push(<Button title="Already Done" color="green"/>)
      }
      if(this.state.appointments[index].status === "PENDING")
        buttonComponent.push(<Button title="In progress..." color="green" />)
        
      arrayOfappointments.push(
        <View style={styles.row}>
            <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} style={{width:80, height:80, borderRadius:10}}/>
            <View>
            <Text style={{marginLeft:"3%",marginTop:"4%", width:150}}>{this.state.appointments[index].date_of_appointment.substring(0,10)}</Text>
            </View>  
            {buttonComponent}
        </View>
      );
    }
  
  return (
    <Container style={styles.container}>
      <Content style={{height: "20%"}}>
      <View style={{width:"100%"}}><Text style={{fontSize:20, fontWeight: 'bold',margin:7, color:'green'}}>Appointments</Text></View>
        {arrayOfappointments}
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