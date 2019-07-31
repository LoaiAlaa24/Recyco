import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  View,
  Text,
  ImageBackground,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import { Image , Button ,TextInput} from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";


export default class NavBar extends React.Component {
  static navigationOptions = {
    header: null
  };

constructor(props){
  super(props);
  this.state = { username: 'Username' ,
                 password: 'Password' };
}
  render() {
    const { props: { name, index, list } } = this;
   
    return (
      <View style={styles.footer}>
     
<View style={{width:"20%" ,   alignItems: 'center' , paddingTop:5}}>
     <TouchableOpacity onPress={() => {this.props.nav.navigate("leaderboard");}}>
      <Icon 
      name='list'
      color='#00aced' />
     </TouchableOpacity>
     </View>
<View style={{width:"20%" ,   alignItems: 'center', paddingTop:5}}>
     <TouchableOpacity onPress={() => {this.props.nav.navigate("Appointments");}}>
      <Icon 
      name='star'
      color='#00aced' />
     </TouchableOpacity>
     </View>
     <View style={{width:"20%",   alignItems: 'center', paddingTop:5}}> 
       <Button title="BOOK" color="green" onPress={() => {
      this.props.nav.navigate("bookingPage");}}/>
      
      </View>
     
     <View style={{width:"20%" , alignItems: 'center', paddingTop:7}}>
        <TouchableOpacity onPress={() => {
      this.props.nav.navigate("checkRecyc");}} >
        <Icon 
        name='camera'
        color='#00aced' />
     </TouchableOpacity>
     </View>
     <View style={{width:"20%" ,   alignItems: 'center', paddingTop:5}}>
     <TouchableOpacity onPress={() => {this.props.nav.navigate("profile");}}>
       
        <Icon 
        name='md-person'
        color='#00aced' />

   </TouchableOpacity>
   </View>
      </View>

    );
  }
}



