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
  Body,
  Footer
} from 'native-base'
import { Image, Button, TextInput, Alert } from 'react-native'
import axios from 'axios'
import styles from './styles'
// import AppNavigator from '../../Routers/MainStackRouter';
const backgroundImg = require('../../../assets/default_profile.png')
import NavBar from '../subComponents/NavBar'
import DataTable from '../subComponents/DataTable'

export default class mainDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      points: 0,
      loading: true,
      photo: ''
    }
    //this.getNews()
  }

  async componentDidMount() {
    await axios({
      method: 'POST',
      url: 'https://recyco.herokuapp.com/api/users/dashboard'
    })
      .then(res => {
        this.setState({
          username: res.data.data.username,
          points: res.data.data.points,
          loading: false,
          photo: res.data.data.photo + '.jpg'
        })
        console.log(res.data.data.photo)
      })
      .catch(err => {
        alert(err)
      })
  }

  async getNews() {
    await axios({
      method: 'GET',
      url:
        'https://newsapi.org/v2/everything?q=recycle-plastics&from=2019-06-30&sortBy=publishedAt&apiKey=b52bfccec2384a02bcd078d67b16c671'
    })
      .then(res => {
        console.log(res.data.articles)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    const {
      props: { name, index, list }
    } = this
    if (!this.state.loading) {
      return (
        <Container style={styles.container}>
          <Content style={{ height: '20%' }}>
            <View>
              <Header style={{ backgroundColor: '#B9B9B9' }}>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                  <View style = {{ borderRadius:10 }} >  
                  <Image source={{ uri: this.state.photo }} style={styles.im} />
                  </View>
              
                  <Text style={{ marginLeft: '3%', paddingTop: '3%' }}>
                    {this.state.username}
                  </Text>
                  <Text style={{ color:'black',marginLeft: '20%', paddingTop: '3%'}}>
                    Points: {this.state.points}
                  </Text>
                  
                </View>

                {/* <Button title="REDEM POINTS!" onPress={()=> this.props.navigation.navigate("redemPoints")} /> */}
              </Header>
              <View style={{backgroundColor: '#CDF1CD'}}>
                <Button
                  color="green"
                  title="REDEEM POINTS!"
                  onPress={() => this.props.navigation.navigate('redemPoints')}
                />
              </View>
              <View style={{ backgroundColor: '#CDF1CD' }}>
                <Text style={{ fontWeight: 'bold', fontSize:20, marginLeft:10}}>Latest News</Text>
              </View>
              
            </View>
            <DataTable />
          </Content>

          <NavBar nav={this.props.navigation} />
        </Container>
      )
    } else {
      return (
        <Container style={styles.container}>
          <Content style={{ height: '20%', backgroundColor: 'black' }}>
            <View>
              <Header style={{ backgroundColor: '#F3DFDB' }}>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                  <Image source={backgroundImg} style={styles.im} />
                  <Text style={{ marginLeft: '3%', paddingTop: '3%' }}>
                    Username
                  </Text>
                  <Text style={{ marginLeft: '40%', paddingTop: '3%' }}>
                    Points:
                  </Text>
                </View>

                {/* <Button title="REDEM POINTS!" onPress={()=> this.props.navigation.navigate("redemPoints")} /> */}
              </Header>
              <View style={{ backgroundColor: '#DEC3BE' }}>
                <Button
                  color="#4757B2"
                  title="REDEM POINTS!"
                  onPress={() => this.props.navigation.navigate('redemPoints')}
                />
              </View>
            </View>
            <DataTable />
          </Content>

          <NavBar nav={this.props.navigation} />
        </Container>
      )
    }
  }
}
