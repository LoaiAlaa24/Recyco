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
import { Image, Button, TextInput } from 'react-native'
import styles from './styles'
import PickerDropdown from '../PickerDropdown'
import Order from '../Order'

export default class rowOfPickers extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      add: false,
      item: '',
      unit: '',
      order: [],
      number: 0,
      ordersRender: [],
      delete: false
    }
    this.selectUnit = this.selectUnit.bind(this)
    this.selectItem = this.selectItem.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.add = this.add.bind(this)
  }
  selectUnit(params) {
    this.setState({ unit: params })
  }
  selectItem(params) {
    this.setState({ item: params })
  }

  async add() {
    if (
      !(
        this.state.number == 0 ||
        this.state.item == '' ||
        this.state.unit == '' ||
        this.state.item == 'Item' ||
        this.state.unit == 'Size'
      )
    ) {
      await this.setState({
        add: true,
        order: [
          ...this.state.order,
          this.state.number + ' - ' + this.state.item + ' - ' + this.state.unit
        ]
      })
      this.props.sItem(this.state.order)
    }
  }

  arrayRemove(i) {
    var arr = this.state.order
    arr.splice(i - 1, 1)
    // alert(i)
    this.setState({ order: arr })
    alert(this.state.order)
  }

  deleteOrder(id) {
    var array = this.state.order
    array.splice(id, 1)
    this.setState({ order: array })
  }

  renderOrder() {
    var ordersRender = []
    for (var i = 0; i < this.state.order.length; i++) {
      var orderID = i
      ordersRender.push(
        <Order
          orders={this.state.order[i]}
          id={i}
          deleteOrder={this.deleteOrder}
        />
      )
    }

    return ordersRender
  }

  render() {
    const {
      props: { name, index, list }
    } = this
    const items = ['Item', 'Bottle', 'Can', 'Cardboard', 'Used Oil']
    const units = ['Size', '600mL', '1 L', '1.5 L','2 L','3 L']
    const unitsCans = ['Size', '355mL']
    const unitsCard = ['Size', '1K']
    return (
      <View style={{ width: '100%', borderWidth:1, borderColor:'black', borderRadius:7}}>
        <View style={styles.units}>
          <TextInput
            placeholder="0"
            underlineColorAndroid="transparent"
            style={{
              paddingLeft: 10,
              paddingBottom: 18,
              width: 50,
              marginLeft: 10
            }}
            onChangeText={number => this.setState({ number })}
            keyboardType={'numeric'}
          />

          <View style={styles.dd}>
            <PickerDropdown
              width={100}
              items={items}
              style={{ marginLeft: 10 }}
              selection={this.selectItem}
            />
          </View>
          {(this.state.item == "" || this.state.item == "Item" ) && 
         
         <PickerDropdown
            width={100}
            items={units}
            selection={this.selectUnit}
            />}
          {this.state.item == "Bottle" && 
         
         <PickerDropdown
            width={100}
            items={units}
            selection={this.selectUnit}
            />}
            {this.state.item == "Can" && 
         
         <PickerDropdown
            width={100}
            items={unitsCans}
            selection={this.selectUnit}
            />}
            {this.state.item == "Used Oil" && 
         
         <PickerDropdown
            width={100}
            items={units}
            selection={this.selectUnit}
            />}
            {this.state.item == "Cardboard" && 
         
         <PickerDropdown
            width={100}
            items={unitsCard}
            selection={this.selectUnit}
            />}
          
          <View style={styles.btn}>
            <Button title="Add" color="green" onPress={this.add} />
          </View>
        </View>

        {this.state.add && (
          <View style={styles.units2}>
            <Text>Your Orders:</Text>
            <View style={{borderWidth:1, borderRadius:10, borderColor:'black', alignSelf:'center', marginBottom:5}}>
              {this.renderOrder()}
            </View>
          </View>
        )}
      </View>
    )
  }
}
