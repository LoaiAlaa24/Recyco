import React, { Component } from 'react'
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
import { Image, Button, TextInput, CameraRoll, ScrollView } from 'react-native'
import axios from 'axios'
import styles from './styles'
import { ImagePicker, Permissions } from 'expo'
import Environment from '../../../config/envirnoment'
import firebase from '../../../config/firebase'
import uuid from 'uuid'

//import AppNavigator from '../../Routers/MainStackRouter';
const backgroundImg = require('../../../assets/bottles.jpg')

export default class registerPage extends React.Component {
  static navigationOptions = {
    header: null
  }
  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL)
    await Permissions.askAsync(Permissions.CAMERA)
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      fullName: '',
      mobileNumber: '',
      email: '',
      address: '',
      photo: null
    }
    this.handleSignUp = this.handleSignUp.bind(this)
  }
  handleChoosePhoto = () => {
    const options = {
      noData: true
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }
  async uploadImageAsync(uri) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = function() {
        resolve(xhr.response)
      }
      xhr.onerror = function(e) {
        console.log(e)
        reject(new TypeError('Network request failed'))
      }
      xhr.responseType = 'blob'
      xhr.open('GET', uri, true)
      xhr.send(null)
    })

    const ref = firebase
      .storage()
      .ref()
      .child(uuid.v4())
    const snapshot = await ref.put(blob)

    blob.close()

    return await snapshot.ref.getDownloadURL()
  }
  async handleSignUp() {
    await this.uploadImageAsync(this.state.photo)
      .then(res => {
        this.setState({ photo: res })
      })
      .catch(err => {
        console.log(err)
      })
    
    console.log(this.state.photo)
    await axios({
      method: 'POST',
      url: 'https://recyco.herokuapp.com/api/users/register',
      data: {
        email: this.state.email,
        username: this.state.username,
        date_of_birth: 'react',
        name: this.state.fullName,
        gender: 'Male',
        phone: this.state.mobileNumber,
        address: this.state.address,
        password: this.state.password,
        photo: this.state.photo
      }
    })
      .then(async res => {
        this.props.navigation.navigate('loginPage')
      })
      .catch(err => alert(err))
  }
  // async componentDidMount() {
  //   await Permissions.askAsync(Permissions.CAMERA_ROLL)
  //   await Permissions.askAsync(Permissions.CAMERA)
  // }
  _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3]
    })

    this._handleImagePicked(pickerResult)
  }

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    })

    this._handleImagePicked(pickerResult)
  }

  _handleImagePicked = async pickerResult => {
    try {
      if (!pickerResult.cancelled) {
        // console.log(pickerResult.uri);
        this.setState({ photo: pickerResult.uri })
      }
    } catch (e) {
      console.log(e)
      alert(e)
    }
  }
  render() {
    const {
      props: { name, index, list }
    } = this
    console.log(this.props.navigation, '000000000')
    return (
      <Container style={styles.container}>
        <Content>
          <TextInput
            style={{
              height: 20,
              borderColor: 'green',
              borderWidth: 1,
              width: 150,
              marginLeft: '27%',
              marginTop: '15%',
              textAlign: 'center',
              borderRadius:7
            }}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
            placeholder="Username"
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
            onChangeText={fullName => this.setState({ fullName })}
            value={this.state.fullName}
            placeholder="Full Name"
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
            onChangeText={mobileNumber => this.setState({ mobileNumber })}
            value={this.state.mobileNumber}
            placeholder="Mobile Number"
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
            onChangeText={address => this.setState({ address })}
            value={this.state.address}
            placeholder="Full Address"
          />
          <View style={{ marginTop: 10 }}>
            <Button
              onPress={this._pickImage}
              title="Choose an existing photo"
            />

            <Button onPress={this._takePhoto} title="Take a photo" />
          </View>
          <View style={{ marginTop: '2%' }}>
            <Button
              title="Sign Up"
              color="green"
              style={{ marginTop: '10%' }}
              onPress={
                // this.props.navigation.navigate('checkRecyc')
                this.handleSignUp
              }
            />
          </View>
        </Content>
      </Container>
    )
  }
}

//  welcomePage;
