import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {px2dp} from '../../utils';
import {IconList} from '../../common/Common';

class IconShow extends Component {
  constructor(props) {
    super(props); 
     this.state={
     code: '',     
    };
  }

 
  componentWillMount() {
    //BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid());
  }

  componentWillUnmount() {
    //BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid);
  }

  
  render() {
    return (
      <IconList/>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f1f1f1',
    marginTop:0,
  },
  back:{
      marginLeft:px2dp(42),
      width:px2dp(70),
      marginTop:px2dp(20),
  },
  item: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: px2dp(84),
      marginRight:px2dp(84),
      marginTop:px2dp(10)
  },
  textStyle: {
      fontSize: px2dp(32),
      color: '#303030',
      marginLeft:px2dp(4),
  },
  login: {
      height:px2dp(91),
      backgroundColor: '#0D9DB5',
      marginTop:px2dp(80),
      marginLeft: px2dp(84),
      marginRight: px2dp(84),
      width:px2dp(583),
      justifyContent: 'center',
      borderRadius:20,
  },
  loginText: {
      fontSize: px2dp(30),
      alignSelf: 'center',
      color: '#FFF'
  },
  noneAccount:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  reg:{
      fontSize:px2dp(24),
      borderBottomWidth:1,
      borderBottomColor:'#333',
  },
  iconView:{
      width:px2dp(39),
      height:px2dp(32),
  },
  image:{
      width:px2dp(40),
      height:px2dp(30),
      justifyContent: 'center',
      alignItems: 'center',
      right:px2dp(20),
      position:'absolute',
      backgroundColor:"#f1f1f1"
  },
})


export default IconShow;