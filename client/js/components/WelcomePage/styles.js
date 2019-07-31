
const React = require('react-native');
const { StyleSheet , Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default{
  im:{
  width:deviceWidth,
  height:deviceHeight/1.01255555555,
  },
  container: {
    backgroundColor: '#FBFAFA',
  },
  v:{
    position:"absolute"
  },
  footer:{
    backgroundColor: '#216083',
    justifyContent: 'center',
    alignItems:'center',
    flex:1,
    height:50,
    flexDirection:'row', 
    flexWrap:'wrap',
    position: 'absolute',
    bottom:0,
    width:"100%"
  },
  tex:{
    position:"absolute",
    color:"#BBBBB",
    alignSelf:"center",
    justifyContent:"center",
    marginTop:deviceHeight/3,
    width:280,
    fontSize:55,
    fontWeight:"bold"
  },btnSignUp: {
    position:"absolute",
    zIndex:100,
    marginLeft:200,
    backgroundColor:'#216083',
    borderRadius:10,
    marginTop:deviceHeight/1.5
  },
  btnSignIn: {
    position:"absolute",
    zIndex:100,
    marginLeft: 100,
    backgroundColor:'#216083',
    borderRadius:10,
    marginTop:deviceHeight/1.5
  },
  btnFB: {
    position:"absolute",
    zIndex:100,
    marginLeft: "28%",
    backgroundColor:'#216083',
    borderRadius:10,
    marginTop:deviceHeight/1.35
  }
};
