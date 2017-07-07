'use strict';

import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
	ProgressBarAndroid,
	Modal,
    ActivityIndicator
} from 'react-native';
import px2dp from '../util';
var ProgressBar =require('ProgressBarAndroid');

class Loading extends Component {
	constructor(props) {
		super(props);
        // 初始状态
        this.state = {};
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

const styles = StyleSheet.create({
	loadingBox: { // Loading居中
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
});


export default Loading;

