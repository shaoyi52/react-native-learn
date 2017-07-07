
'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  ScrollView,
  Modal,
  ActivityIndicator
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import IconsName from './IoniconsData';
import {px2dp} from '../utils';


const deviceH = Dimensions.get('window').height
const deviceW = Dimensions.get('window').width

exports.SCREEN_WIDTH = deviceH;
exports.SCREEN_HEIGHT = deviceW;

export class Loading extends Component {
  constructor(props) {
    super(props);
        // 初始状态
        this.state = {
          modalState:false
        };
    }

    render() {
      return(
        <Modal
        transparent = {true}
        onRequestClose={()=> {}}
        >
          <View style={styles.loadingBox}>
            <View style={styles.bgPro}>
            <ActivityIndicator animating={true} size="large" color="#109EB5" />
             <Text>加载中...</Text>
            </View>
          </View>
        
        </Modal>
        );
    }
}
export class LoadMore extends Component {

  constructor(props) {

    super(props);
  }

  render() {

    let body = null;

    if (this.props.loadMoreFlag == 1) {
      body = (
        <View style={{ alignItems: 'center', paddingVertical: 14, backgroundColor: this.props.bgcolor }}>
          <Text style={{ color: '#666', fontSize: 12 }}>正在加载...</Text>
        </View>
      );
    }

    if (this.props.loadMoreFlag == 2) {
      body = (
        <View style={{ alignItems: 'center', paddingVertical: 14, backgroundColor: this.props.bgcolor }}>
          <Text style={{ color: '#666', fontSize: 12 }}>就这么多了...</Text>
        </View>
      );
    }

    return body;
  }
}

export class IconList extends Component {

  constructor(props) {
    super(props);
    this.state={
      icons:Object.keys(IconsName)
    }
  }

  render() {
    let body = null;
    let box=this.state.icons.map(function(elem,index){
      //console.log(elem);

      return(
        <View key={index} style={[styles.boxes,styles.boxesBorderLeft]}>
            <Icon size={24} name={elem} ></Icon>
            <Text style={styles.boxText}>{elem}</Text>
        </View>
      )
      
    })

    body=(
      <ScrollView> 
        
        <View style={styles.boxContainer}>
          {box}
        </View>
      </ScrollView>
    );
    return body;
  }
}

let currentKey = '';

export function SaveRouteKey(RouteKey) {
  currentKey = RouteKey;
};

/**
 * 获取暂存的RouteKey
 */
exports.GetRouteKey = function() {
  return currentKey;
};

const styles = StyleSheet.create({
  //LoadMore css
  boxContainer:{
    flexDirection: "row", 
    flexWrap:"wrap",
    width: deviceW,
    borderTopWidth: 2,
    borderTopColor:"#ccc",
    borderLeftWidth: 2,
    borderLeftColor:"#ccc",
    borderRightWidth: 2,
    borderRightColor:"#ccc",
  },
  boxes:{
    width:(deviceW-10)/6,
    height:(deviceW-10)/6,
    alignItems:'center',
  },
  boxesBorderRight:{
    borderBottomWidth: 2,
    borderBottomColor:"#ccc",
    borderRightWidth: 2,
    borderRightColor:"#ccc",
  },
  boxesBorderLeft:{
    borderBottomWidth: 2,
    borderBottomColor:"#ccc",
    borderLeftWidth: 2,
    borderLeftColor:"#ccc",
  },

  // Loading css
  loadingBox: { 
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0, 0, 0, 0.5)', // 半透明
    },
    bgPro:{
      display:'flex',
      flexDirection:'column',
      width:px2dp(300),
      height:px2dp(160),
      alignItems:'center',
        justifyContent:'center',
        borderRadius:px2dp(10),
      backgroundColor:'#fff'
    }
})
