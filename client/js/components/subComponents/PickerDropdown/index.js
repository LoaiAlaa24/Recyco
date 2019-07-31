import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";
import styles from "./styles";

export default class PickerDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.items[0]
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
    this.props.selection(value);
  }
  
  render() {
    const items = this.props.items;
    const width = this.props.width;
    return (

          <Form style={{marginRight:0}}>
            <Picker
              mode="dropdown"
              iosHeader="Item"
              iosIcon={<Icon name="arrow-down" />}
              style={{width:width }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)} >

              <Picker.Item label={items[0]} value={items[0]} />
              <Picker.Item label={items[1]} value={items[1]} />
              <Picker.Item label={items[2]} value={items[2]} />
              <Picker.Item label={items[3]} value={items[3]} />
              <Picker.Item label={items[4]} value={items[4]} />
            </Picker>
          </Form>

    );
  }
}