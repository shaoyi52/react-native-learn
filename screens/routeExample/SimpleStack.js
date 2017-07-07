import React,{Component} from 'react';
import {
    Button, 
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';


const MyPhotosScreen =({navigation}) =>(
     <Text style={styles.sampleText}>{children}</Text>

    )

const MyHomeScreen =({navigation}) =>(
    <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to SimpleStack!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
      </View>

    )

const SimpleStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  }
});
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
    sampleText: {
    margin: 14,
  },
});

export default SimpleStack;