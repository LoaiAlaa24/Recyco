
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  footer:{
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems:'center',
    flex:1,
    height:50,
    flexDirection:'row', 
    flexWrap:'wrap',
    position: 'absolute',
    bottom:0,
    width:"100%"
  }
};
