import React,{Component} from 'react';
import { Image, ScrollView, View,Text } from 'react-native';
import Button from '../../components/button/Button';


class Demo  extends Component { 
  render() {
    let _this=this;
    console.log("props",_this.props);
    return (
    <View style={{flex:1,backgroundColor:"#f00",backgroundColor:"#f88"}}>  
      <View style={{ flexDirection:"column",backgroundColor:"#ff0"}}> 
        <View style={{ height:48,justifyContent:'flex-end',}}>
          <Text style={{textAlign:'center'}}>
            测试页ssds
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
            <Button size="small" time='20160505'>按钮测试</Button>
          </View>
           <View style={{flex:1,backgroundColor:'#0ff'}}>
            <Text>
              测试页3
            </Text>
          </View>
        </View>
      </View>
      <Button type='primary' time='20160505'>按钮测试</Button>

    </View>    
    
    )
  }
}




export default Demo;