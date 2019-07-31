
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  row:{
    flex:1,
    flexDirection:'row', 
    flexWrap:'wrap',
    height:"50%",
    borderColor: "white",
    borderWidth: 6,
    borderRadius:10
  },
  cont:{
    width: "94%",
    alignSelf:"center",
    backgroundColor:"white",
    borderRadius:10,
    marginTop: 10
  }
};