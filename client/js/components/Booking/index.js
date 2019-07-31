import React, { Component } from 'react'
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
import {
  Image,
  DatePickerIOS,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native'
import styles from './styles'
import RowOfPickers from '../subComponents/RowOfPickers'
import PickerDropdown from '../subComponents/PickerDropdown'
import Axios from 'axios'
import { app } from 'firebase'

const backgroundImg = require('../../../assets/rubbish2.png')

export default class bookingPage extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      now: true,
      dataChosen: false,
      chosenDate: new Date(),
      finalDate: '',
      numbers: [],
      items: [],
      units: []
    }

    this.selectDateOption = this.selectDateOption.bind(this)
    this.setDate = this.setDate.bind(this)
    this.selectDate = this.selectDate.bind(this)
    this.selectedItem = this.selectedItem.bind(this)
    this.confirm = this.confirm.bind(this)
  }

  selectDateOption(params) {
    if (params == 'Schedule a date') {
      this.setState({ now: false })
    }
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate })
  }

  selectDate() {
    const d = this.state.chosenDate
    const stringDate = d + ''
    this.setState({
      finalDate: stringDate.substring(0, 24),
      dataChosen: true,
      now: true
    })
  }
  async confirm() {
    const orders = this.state.orders
    var orderSplitted = []
    var numbers = []
    var items = []
    var units = []

    for (var i = 0; i < orders.length; i++) {
      orderSplitted = orders[i].split('-')

      numbers.push(orderSplitted[0].replace(/\s+/g, ''))
      items.push(orderSplitted[1].replace(/\s+/g, ''))
      units.push(orderSplitted[2].replace(/\s+/g, ''))

      // console.log(items)
      this.props.navigation.navigate("Appointments");

    }
    var pickups = []
    for (var i = 0; i < items.length; i++) {
      pickups.push({
        item: items[i],
        unit: units[i],
        amount: numbers[i]
      })
    }
    const appointment = {
      date_of_appointment: this.state.chosenDate,
      pickup: pickups
    }
    await axios({
      method: 'POST',
      url: 'https://recyco.herokuapp.com/api/appointments/create',
      data: appointment
    })
      .then(console.log("Successful"))
      .catch(err => {
        console.log('Error:' + err)
      })
  }

  async selectedItem(params) {

    await this.setState({
      orders: params
    })

    console.log(this.state.orders)
  }

  render() {
    const {
      props: { name, index, list }
    } = this
    const items = ['Plastic Bottle', 'Cans', 'Cardboard', 'Used Oil']
    const units = ['350 ML', '500 ML', '1 L', '1.5 L']
    const options = ['As soon as possible', 'Schedule a date']

    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.title}>
            <Text style={{color:'green'}}> Create Appointment</Text>
          </View>

          <RowOfPickers sItem={this.selectedItem} />
          <View style={{ marginTop: '10%' }}>
            <Text style={{color:'green'}}>  Pickup Date:</Text>

            <PickerDropdown
              width={200}
              items={options}
              selection={this.selectDateOption}
            />

            {!this.state.now && (
              <View>
                <DatePickerIOS
                  date={this.state.chosenDate}
                  onDateChange={this.setDate}
                />

                <Button title="Select" onPress={() => this.selectDate()} />
              </View>
            )}
            {this.state.dataChosen && (
              <Text>Selected Date is {this.state.finalDate}</Text>
            )}
          </View>
        </Content>
        <TouchableOpacity onPress={this.confirm}>
          <View style={styles.footer}>
            <Text style={{color:'green'}}>Confirm</Text>
          </View>
        </TouchableOpacity>


      </Container>
    )
  }
}
