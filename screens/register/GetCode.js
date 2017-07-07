'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ToastAndroid,
  TouchableHighlight,
  Text,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {px2dp} from '../../utils';

class GetCode extends Component {
  static propTypes = {
    GetVerificationCode:React.PropTypes.func.isRequired,
    phone:React.PropTypes.string.isRequired,
  }; 
  constructor(props) {
    super(props);
    this.state={
     active:true,
     text:'获取验证码'
   }; 
   this.timer=null;
 }
 
 componentWillUnmount() {
  console.log('清除定时器')
  clearInterval(this.timer); 
}

/* 获取验证码 */
GetCodeFn(){
  if(this.props.phone){
    let sum = 120;
    if(this.state.active){
     this.setState({
      active:false,
      text:'120秒重新获取'
    })
     this.props.GetVerificationCode();
     this.timer = setInterval(() => {
      sum--;
      this.setState({
        text:sum + '秒重新获取'
      })
      if(sum == 0){
        this.setState({
          active:true,
          text:'重新获取'
        })
        clearInterval(this.timer); 
        return;
      }
    },1000);
   }
 }else{
      ToastAndroid.show('手机号码不能为空', ToastAndroid.SHORT);
      return;
 }
}
render() {
  return (
    <TouchableHighlight underlayColor="#f1f1f1"  onPress = {()=> this.GetCodeFn()} style={styles.getCode}>
      <Text style={styles.textCode}>{this.state.text}</Text>
    </TouchableHighlight>
    );
}
}

const styles = StyleSheet.create({
  getCode:{
   width:px2dp(183),
   height:px2dp(73),
   justifyContent: 'center',
   alignItems: 'center',
   right:px2dp(18),
   top:px2dp(2),
   position:'absolute',
   backgroundColor:"#f1f1f1",
   borderWidth:1,
   borderColor:"#cacaca",
   borderRadius:px2dp(35),
 },
 textCode:{
  fontSize:px2dp(24),
  borderBottomWidth:1,
  borderBottomColor:'#0D9DB4',
  color:'#0D9DB4'
}
});


export default GetCode;