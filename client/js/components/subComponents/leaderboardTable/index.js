import React, { Component } from 'react'
import axios from 'axios'
import { Container, Header, Content, View, Text } from 'native-base'
import { Image, Button, TextInput, Alert } from 'react-native'
import styles from './styles'
const backgroundImg = require('../../../../assets/default_profile.png')
import NavBar from '../NavBar'

export default class LeaderboardTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { users: [], loading: true, username: '', points: 0 }
  }
  async componentDidMount() {
    await axios({
      method: 'POST',
      url: 'https://recyco.herokuapp.com/api/users/leaderboard'
    })
      .then(res => {
        var users = []
        console.log(res.data.data)
        users = res.data.data

        this.setState({ users: users, loading: false })
      })
      .catch(err => {
        alert(err)
      })
  }

  render() {
    if (!this.state.loading) {
      const {
        props: { name, index, list }
      } = this
      const arrayOfusers = []
      for (var i = 0; i < this.state.users.length; i++) {
        const index = i

        arrayOfusers.push(
          <View style={styles.row}>
            <Image
              source={{ uri: this.state.users[i].photo + '.jpg' }}
              style={{ width: 30, height: 30, borderRadius: 15 }}
            />
            <Text
              style={{
                fontWeight: 'bold',
                paddingTop: '1.5%',
                marginLeft: '3%'
              }}
            >
              {this.state.users[index].name}
            </Text>
            <Text style={{ marginLeft: '3%', paddingTop: '1.5%' }}>
              Points: {this.state.users[index].points}
            </Text>
          </View>
        )
      }

      return (
        <Container style={{backgroundColor:'#CDF1CD'}}>
          <Content style={{ height: '20%' }}>
            <View><Button title="Challenges" onPress={()=>this.props.navigation.navigate("challenges")}/></View>
            <View style={{ width: '100%' }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  margin: 7,
                  color: 'green'
                }}
              >
                Leaderboard
              </Text>
            </View>
            {arrayOfusers}
          </Content>
          <NavBar nav={this.props.navigation} />
        </Container>
      )
    } else {
      return <Text>Loading...</Text>
    }
  }
}
