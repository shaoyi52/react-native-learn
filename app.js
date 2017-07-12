// this will start our app
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Banner from './components/Banner';
import Row from './components/Row';


import SimpleStack from './screens/routeExample/SimpleStack';
import IconShow from './screens/iconShow/IconShow';
import List from './screens/list/List';
import Demo from './screens/demo/Demo';
import Watch from './screens/example/watch';

import Register from './screens/register/register';
import Login from './screens/login/Login';
import Mine from './screens/mine/Mine';

const Routes={
  SimpleStack:{
    name: 'SimpleStack',
    description: 'A card stack',
    screen: SimpleStack,
  }, 
 
  Icons:{
    name: 'IconShow',
    description: 'A card stack',
    screen: IconShow,
  },
  List:{
    name: 'List',
    description: 'List',
    screen: List,
  },
  Demo:{
    name: '测试页',
    description: '测试页',
    screen: Demo,
  },
  Watch:{
    name:'计时器',
    description: '计时器',
    screen: Watch,
  },
  Register:{
    name: 'Register',
    description: 'A card stack',
    screen: Register,
  },
  Login:{
    name: '登录',
    description: '登录',
    screen: Login,
  },
  Mine:{
    name:'个人中心',
    description: '个人中心',
    screen: Mine,
  }


}

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Banner/>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const MainScreen = ({navigation}) =>(
  <ScrollView>
      <Banner/>
      {Object.keys(Routes).map((routeName:string)=>(
        
        <Row key={routeName} title={Routes[routeName].name}  onPress={()=>{navigation.navigate(routeName)}}/>
        
        ))}
      <Row title='列表列表列表' onPress={()=>{}}/>
  </ScrollView>
)
const AppNavigator = StackNavigator(
  {
    ...Routes,
    Index: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default AppNavigator;