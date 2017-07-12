import React,{Component} from 'react';
import { List } from 'antd-mobile';

import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';
import {px2dp} from '../../utils';
import Header from '../../common/Header';

const Item = List.Item;

class Mine extends Component {
  constructor(props) {
    super(props); 
      this.state={
        username:'',
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
      <View style={styles.container}>
        <Header {...this.props} title='个人中心' hasPress={true}/>
        <ScrollView
          style={{ flex: 1, backgroundColor: '#f5f5f9' }}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          >
          <View style={styles.headerWrap}>
            <View style={styles.headerImg}>
              <Image
                source={{ uri: 'https://pic1.zhimg.com/693f18c3366811a20f1d1f3926361034_m.png' }}
                style={styles.avatar}
              />
            </View>
            <View style={styles.nameWrap}>
              <Text style={styles.nickName}>A+(hello world) [愉快]</Text>
            </View>

          </View>
          <List >
            <Item
              thumb={<Image
                source={{ uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }}
                style={{ width: 29, height: 29,marginRight:5 }}
              />}
              arrow="horizontal"
            >
              个人信息
            </Item>
            <Item
              thumb={<Image
                source={{ uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }}
                style={{ width: 29, height: 29,marginRight:5 }}
              />}
              arrow="horizontal"
            >
              意见反馈
            </Item>
            <Item
              thumb={<Image
                source={{ uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }}
                style={{ width: 29, height: 29,marginRight:5 }}
              />}
              arrow="horizontal"
            >
              我的消息
            </Item>
            <Item
              thumb={<Image
                source={{ uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }}
                style={{ width: 29, height: 29,marginRight:5 }}
              />}
              arrow="horizontal"
            >
              升级检测
            </Item>
          </List>
        </ScrollView>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column'
  },
  headerWrap: {
    flex: 1,
    height:px2dp(270),
    backgroundColor:'#06BFFF'    
  },
  headerImg:{
    marginTop:px2dp(31),
    alignItems:'center'
  },  
  avatar:{
    width:px2dp(162),
    height:px2dp(162),
    borderRadius:px2dp(81)
  },
  nameWrap:{
    marginTop:px2dp(5),
    alignItems:'center',
    justifyContent: 'center'
  },
  nickName:{
    color:"#fff",
    fontSize:px2dp(30)
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


export default Mine;