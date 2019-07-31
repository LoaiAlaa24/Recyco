import React, { Component } from 'react'
import firebase from '../../../config/firebase'
import axios from 'axios'
import {
  Container,
  Content,
  View,
  Text
} from 'native-base'
import { Image, Button} from 'react-native'
import styles from './styles'
import NavBar from '../subComponents/NavBar'
const backgroundImg = require('../../../assets/loai.jpg')

const storage = firebase.storage().ref()
export default class userProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      fullName: '',
      mobileNumber: '',
      email: '',
      address: '',
      points: 0,
      loading: true,
      photo: ''
    }
  }
  async componentDidMount() {
    await axios({
      method: 'POST',
      url: 'https://recyco.herokuapp.com/api/users/dashboard'
    })
      .then(res => {
        console.log(res.data.data)
        this.setState({
          username: res.data.data.username,
          fullName: res.data.data.name,
          mobileNumber: res.data.data.phone,
          email: res.data.data.email,
          address: res.data.data.address,
          points: res.data.data.points,
          photo: res.data.data.photo + '.jpg',
          loading: true
        })
      })
      .catch(err => {
        alert(err)
      })
  }

  openAppointments(){

  this.props.navigation.navigate("AppointmentsAdmin");



  }

  render() {
    const {
      props: { name, index, list }
    } = this
    if (!this.state.loadiing) {
      return (
        <Container style={styles.container}>
          <Content>
            <View
            
              style={{ width: '100%', height: 250, backgroundColor: 'black' }}
            >
              
              <Image
                blurRadius={1}
                source={{ uri: this.state.photo }}
                style={{ width: '100%', height: 250 }}
              />
              <View
                style={{
                  width: '100%',
                  height: '50%',
                  alignContent: 'center',
                  alignItems: 'center',
                  position: 'absolute'
                }}
              >
                <Image
                  source={this.state.photo}
                  style={{ width: 250, height: 250 }}
                />
                <View
                  style={{
                    backgroundColor: '#CDF1CD',
                    width: '100%',
                    position: 'absolute',
                    marginTop: '60%',
                    alignItems: 'center'
                  }}
                >
                  <Text
                    style={{ fontWeight: 'bold', backgroundColor: '#CDF1CD' }}
                  >
                    {this.state.fullName}
                  </Text>
                  
                </View>
              </View>
            </View>

            <View style={{ width: '100%', height: '100%' }}>

              <View
                style={{
                  borderColor: 'black',
                  marginTop: '20%',
                  width: '100%',
                  height: '50%',
                  alignContent: 'left',
                  position: 'absolute'
                }}
              >
                <View style={{flexDirection:"row"}}>
                  <View style={{width:80}}>
                <Text
                  style={{
                    borderColor: 'black',
                    fontWeight: 'bold',
                    color: 'green',
                    fontSize: 15,
                    width:80
                  }}
                >
                  Points{' '}
                  </Text>
                  </View>
                  <Text
                    style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
                  > 
                    {this.state.points}
                  </Text>
                  </View>
                  <View style={{flexDirection:"row"}}>
                  <View style={{width:80}}>
                <Text
                  style={{
                    borderColor: 'black',
                    fontWeight: 'bold',
                    color: 'green',
                    fontSize: 15,
                    width:80
                  }}
                >
                  Contact{' '}
                  </Text>
                  </View>
                  <Text
                    style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
                  >
                    
                    {this.state.mobileNumber}
                  </Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <View style={{width:80}}>
                  <Text
                    style={{
                      borderColor: 'black',
                      fontWeight: 'bold',
                      color: 'green',
                      fontSize: 15,
                      width:80
                    }}
                  >
                  Email{' '}
                  </Text>
                  </View>
                  <Text
                    style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
                  >
                    {this.state.email}
                  </Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <View style={{width:80}}>
                <Text
                  style={{
                    borderColor: 'black',
                    fontWeight: 'bold',
                    color: 'green',
                    fontSize: 15,
                    width:80
                  }}
                >
                  Address{' '}
                  </Text>
                  </View>
                  <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>
                    {this.state.address}
                  </Text>
                </View> 
              </View>
              <Button title="Appointments" onPress={()=> this.openAppointments() }  />
            </View>
          </Content>
          <NavBar nav={this.props.navigation} />
        </Container>
      )
    } else {
      return (
        <Container style={styles.container}>
          <Content>
            <View
              style={{ width: '100%', height: 250, backgroundColor: 'black' }}
            >
              <Image
                blurRadius={1}
                source={backgroundImg}
                style={{ width: '100%', height: 250 }}
              />
              <View
                style={{
                  width: '100%',
                  height: '50%',
                  alignContent: 'center',
                  alignItems: 'center',
                  position: 'absolute'
                }}
              >
                <Image
                  source={backgroundImg}
                  style={{ width: 250, height: 250 }}
                />
                <View
                  style={{
                    backgroundColor: 'white',
                    width: '100%',
                    position: 'absolute',
                    marginTop: '60%',
                    alignItems: 'center'
                  }}
                >
                  <Text
                    style={{ fontWeight: 'bold', backgroundColor: 'white' }}
                  />
                </View>
              </View>
            </View>

            <View style={{ width: '100%', height: '100%' }}>
              {/* <Image  blurRadius={1} source={backgroundImg2} style={{width:"100%", height:250}}/> */}

              <View
                style={{
                  borderColor: 'black',
                  marginTop: '20%',
                  width: '100%',
                  height: '50%',
                  alignContent: 'center',
                  alignItems: 'center',
                  position: 'absolute'
                }}
              >
                <Text
                  style={{
                    borderColor: 'black',
                    fontWeight: 'bold',
                    color: 'gold',
                    fontSize: 15
                  }}
                >
                  Points:{' '}
                  <Text
                    style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
                  >
                    {this.state.points}
                  </Text>
                </Text>
                <Text
                  style={{
                    borderColor: 'black',
                    fontWeight: 'bold',
                    color: 'green',
                    fontSize: 15
                  }}
                >
                  Contact:{' '}
                  <Text
                    style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
                  >
                    {' '}
                    {this.state.mobileNumber}
                  </Text>
                </Text>
                <Text
                  style={{
                    borderColor: 'black',
                    fontWeight: 'bold',
                    color: 'green',
                    fontSize: 15
                  }}
                >
                  Email:{' '}
                  <Text
                    style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
                  >
                    {' '}
                    {this.state.email}
                  </Text>
                </Text>
                <Text
                  style={{
                    borderColor: 'black',
                    fontWeight: 'bold',
                    color: 'green',
                    fontSize: 15
                  }}
                >
                  Address:{' '}
                  <Text
                    style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}
                  >
                    {' '}
                    {this.state.address}
                  </Text>
                </Text>
              </View>
            </View>
          </Content>
          <NavBar nav={this.props.navigation} />
        </Container>
      )
    }
  }
}
