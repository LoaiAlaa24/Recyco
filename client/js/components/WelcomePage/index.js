import React, { Component } from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  View,
  Text,
  Button,
  ImageBackground,
  Icon,
  Left,
  Right,
  Body
} from 'native-base'
import { Image } from 'react-native'
import styles from './styles'
//import AppNavigator from '../../Routers/MainStackRouter';
const backgroundImg = require('../../../assets/recycoPage.jpg')

import NavBar from '../subComponents/NavBar'

export default class welcomePage extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const {
      props: { name, index, list }
    } = this
    console.disableYellowBox = true;
    console.log(this.props.navigation, '000000000')
    return (
      <Container style={styles.container}>
        <Content>
          <Image source={backgroundImg} style={styles.im} />

          {/* <Text style={styles.tex}>
                Recyco
          </Text> */}

          <Button
            onPress={() => this.props.navigation.navigate('loginPage')}
            style={styles.btnSignIn}
          >
            <Text>Sign in</Text>
          </Button>

          <Button
            onPress={() => this.props.navigation.navigate('registerPage')}
            style={styles.btnSignUp}
          >
            <Text>Sign up</Text>
          </Button>

        </Content>
        <View style={styles.footer}>

          <Text style={{fontWeight:"bold",color:"white",fontSize:22}}>Welcome to Recyco!</Text>

        </View>
      </Container>
    )
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer())
  }
}

//  welcomePage;
