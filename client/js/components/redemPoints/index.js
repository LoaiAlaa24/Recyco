import React, { Component } from "react";
import axios from 'axios'
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
  Body,
  Footer
} from "native-base";
import { Image , Button ,TextInput, Alert} from "react-native";
import styles from "./styles";
//import AppNavigator from '../../Routers/MainStackRouter';
const backgroundImg = require("../../../assets/default_profile.png");
import NavBar from "../subComponents/NavBar";
import DataTable from "../subComponents/DataTable";
import QRCode from 'react-native-qrcode';

export default class redemPoints extends React.Component {
  
constructor(props){
  super(props);
  this.state = { points: 0 };

}

  render() {
    const { props: { name, index, list } } = this;
    return (
      <Container style={styles.container}>
        <Content >
        <Header style={{backgroundColor:"#C6AAA4"}} >
        <View style={{flexDirection:"row" , width:"100%" }}>
                
                <Text style={{color:"#AFF14E",fontWeight:"bold",marginLeft:"3%",paddingTop:"3%"}}>REDEEM YOUR POINTS NOW!</Text>

              </View>
          </Header>
          <View style={{paddingTop:"20%",alignContent:"center",alignItems:"center"}}>

          <QRCode
            value={this.state.points}
            //Setting the value of QRCode
            size={250}
            //Size of QRCode
            bgColor="#000"
            //Backgroun Color of QRCode
            fgColor="#fff"
            //Front Color of QRCode
              />
          <Text style={{margin:10}}>The points can be redemed by scanning the QR code in a partner store! </Text>
          <Text style={{margin:10}}>Contact us for more info! </Text>
          </View>
        </Content>

        <NavBar nav={this.props.navigation}/>

       
      </Container>
      
    );
  }
}