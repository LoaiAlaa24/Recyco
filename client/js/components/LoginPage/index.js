import React, { Component } from 'react'
// import * as firebase from '../../../config/firebase.js'
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
  Body
} from 'native-base'
import { Image, Button, TextInput, Alert } from 'react-native'
import styles from './styles'
//import AppNavigator from '../../Routers/MainStackRouter';
const backgroundImg = require('../../../assets/rubbish2.png')

export default class loginPage extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }
    this.handleLogin = this.handleLogin.bind(this)
  }
  async handleLogin() {
    console.log(this.state.email)
    const userEmail = this.state.email.toLowerCase();
    await axios({
      method: 'POST',
      url: 'https://recyco.herokuapp.com/api/users/login',
      data: { email: userEmail, password: this.state.password }
    })
      .then(res => {
        if (res.data.auth) {
          this.props.navigation.navigate('mainDashboard')
        } else {
          alert('Something went wrong!')
        }
      })
      .catch(err => {
        alert('wrong username or password!')
      })
  }
  render() {
    const {
      props: { name, index, list }
    } = this
    console.log(this.props.navigation, '000000000')
    return (
      <Container style={styles.container}>
        <Content style={{ marginTop: '25%' }}>
          <TextInput
            style={{
              height: 1,
              borderColor: 'green',
              borderWidth: 1,
              width: 150,
              marginLeft: '27%',
              marginTop: '25%',
              textAlign: 'center',
              borderRadius:7
            }}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            placeholder="Email"
          />

          <TextInput
            style={{
              height: 20,
              borderColor: 'green',
              borderWidth: 1,
              width: 150,
              marginLeft: '27%',
              marginTop: '10%',
              textAlign: 'center',
              borderRadius:7
            }}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            placeholder="Password"
            secureTextEntry={true}
          />

          <View style={{ marginTop: '10%' }}>
            <Button
              title="Sign in"
              color="green"
              style={{ marginTop: '10%' }}
              onPress={this.handleLogin}
            />
          </View>
        </Content>
        {/* <Image  source={backgroundImg} style={styles.im}/> */}
      </Container>
    )
  }
}
