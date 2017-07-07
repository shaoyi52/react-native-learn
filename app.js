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
import Register from './screens/register/register';
import IconShow from './screens/iconShow/IconShow';
import List from './screens/list/List';
import Demo from './screens/demo/Demo';

const Routes={
  SimpleStack:{
    name: 'Stack Example',
    description: 'A card stack',
    screen: SimpleStack,
  },
  
  Register:{
    name: 'Stack Example',
    description: 'A card stack',
    screen: Register,
  },
  Icons:{
    name: 'Icons',
    description: 'A card stack',
    screen: IconShow,
  },
  List:{
    name: 'Icons',
    description: 'List',
    screen: List,
  },
  Demo:{
    name: 'Icons',
    description: '测试页',
    screen: Demo,
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
        
        <Row key={routeName} title={routeName}  onPress={()=>{navigation.navigate(routeName)}}/>
        
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