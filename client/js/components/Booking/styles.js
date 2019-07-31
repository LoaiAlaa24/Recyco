
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default {
  
  units:{
    flex:1,
    marginTop:"5%",
    flexDirection:'row', 
    flexWrap:'wrap',
    width: "70%"

  },
  dd:{
    width:125
  },footer:{
    justifyContent: 'center',
    alignItems:'center',
    height:50
    
  },
  title:{
    marginLeft:"2%",
    marginTop:"10%"
  },
  btn:{
    width:"50%",
    marginTop:"30%"

  },im:{
    height:"20%",
    width:"20%",
    marginLeft:"40%",
    marginBottom:"20%"
  },
  shadow: {
    flex: 1,
    width: 40,
    height: 40,
    resizeMode: "contain"
  },
  header:{

width:400,
height:400,
// resizeMode:"contain",
alignSelf:"center",
borderBottomWidth:20
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
    backgroundColor:"#FF851B"
  },
  in:{
width:200,
height:50,
backgroundColor:"#ffff",
borderRadius:10,
paddingLeft: 10,
marginLeft:75,
marginBottom:30,
marginTop:10

  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor:"#FF851B",
    borderRadius:10,
  },
};
