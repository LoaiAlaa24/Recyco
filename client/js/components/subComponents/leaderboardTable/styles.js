
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  row:{
    flex:1,
    flexDirection:'row',
    marginTop:2,
    borderWidth:1,
    borderRadius:20,
    backgroundColor:'white',
    width: "100%"
  }
};