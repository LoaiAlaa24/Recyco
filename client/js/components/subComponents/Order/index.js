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

export default class Order extends React.Component {
  

  render() {
    const { props: { name, index, list } } = this;
   
    return (
      <View style={styles.units3} >
        <View style={{width:240}}>
          <Text style={{paddingTop:8}}>{this.props.orders}</Text>
        </View>
        <View style={styles.delete}> 
          <Button title="Delete" onPress={()=>this.props.deleteOrder(this.props.id)}/> 
        </View>
      </View>

    );
  }
}