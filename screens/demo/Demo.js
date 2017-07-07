import React,{Component} from 'react';
import { Image, ScrollView, View,Text } from 'react-native';


class Demo  extends Component { 
  render() {
    return (
    <View style={{flex:1,backgroundColor:"#f00",backgroundColor:"#f88"}}>  
      <View style={{ flexDirection:"column",backgroundColor:"#ff0"}}> 
        <View style={{ height:48,justifyContent:'flex-end',}}>
          <Text style={{textAlign:'center'}}>
            测试页sds
          </Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:'space-between'}}>
          <View style={{flex:1,backgroundColor:'#0f0'}}>
            <Text>
              测试页1
            </Text>
          </View>
          <View style={{flex:1,backgroundColor:'#0ff',marginHorizontal:50}}>
            <Text>
              测试页2
            </Text>
          </View>
           <View style={{flex:1,backgroundColor:'#0ff'}}>
            <Text>
              测试页3
            </Text>
          </View>
        </View>
      </View>
    </View>    
    
    )
  }
}




export default Demo;