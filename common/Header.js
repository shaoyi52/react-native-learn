
'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {px2dp} from '../utils';



class Header extends Component {
  static propTypes = {
        title: React.PropTypes.string.isRequired,
        hasPress:React.PropTypes.bool,
        backPress: React.PropTypes.func      
      }; 

  constructor(props) {
    super(props);
    
     this.state = {
      backBtn:true,
      data:{}
    };
  }

  _backPress(){
    if(this.props.hasOwnProperty('backPress')){
      this.props.backPress() 
    }else{
      this.props.navigation.goBack(null);
      return true;
    }
  }

  componentDidMount() {
    if(this.props.hasPress){
      this.setState({backBtn:true})
    }else{
       this.setState({backBtn:false})
    }
  }

  render() {   
   if(this.state.backBtn){
      return (
        <View style={styles.header}>
           <TouchableHighlight style={styles.hd_return} underlayColor="#f1f1f1"  onPress={() =>this._backPress()}>
              <Icon name='ios-arrow-back' size={px2dp(60)}  />
          </TouchableHighlight>
          <Text style={styles.hd_title}>{this.props.title}</Text>
          {(()=>{
            if(this.props.hasOwnProperty('OKClick')){
              return <TouchableHighlight style={styles.hd_ok} underlayColor="#f1f1f1"  onPress={() =>this.props.OKClick(this.props.that)}>
              <Text style={styles.okText}>完成</Text>
              </TouchableHighlight>
            }
          })()}
        
        </View>
      );
   }else{
      return (
        <View style={styles.header}>           
          <Text style={styles.hd_title}>{this.props.title}</Text>
        </View>
      );
   }
  }
}

const styles = StyleSheet.create({    
    header:{
      flexDirection: 'row', 
      height:px2dp(77), 
      paddingHorizontal:px2dp(42), 
      alignItems: 'center' ,
      justifyContent: 'center', 
      backgroundColor: '#F1F1F1'  
    },
    hd_return:{
        position :'absolute',left:0,
        paddingLeft:px2dp(20),
        width:px2dp(80),

    },
    hd_ok:{
      position :'absolute',right:0,
        padding:px2dp(24)
    },
    okText:{
      fontWeight:'bold',
      fontSize:px2dp(32),  
    },
    hd_title:{
      fontSize: px2dp(31), color: '#3f3f3f' 
    },   
});

export default Header;