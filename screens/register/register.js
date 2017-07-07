import React,{Component} from 'react';
import {
    Button, 
    TouchableHighlight,
    ScrollView,
    StyleSheet,
    BackHandler,
    TextInput,
    View,
    Text,
} from 'react-native';
import {px2dp} from '../../utils';
import GetCode from './GetCode';

class Register extends Component {
  constructor(props) {
    super(props); 
     this.state={
     username:'',
     code: '',
     password: '',
     phone:'',
     isPass:true,
     eyes:require('../../img/icon/noView.png')  
   };
  }

  _onBackAndroid(){
    this.props.navigation.goBack(null);
    return true;
  }

  componentWillMount() {
    //BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid());
  }

  componentWillUnmount() {
    //BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid);
  }

  Sumit(){
    
  }
  GetVerificationCode(){

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop:px2dp(60)}}></View>
        <View style={styles.item}><Text style={styles.textStyle}>用户名设置：</Text></View>
        <View style={styles.item}>
          <TextInput
          // autoFocus={true}
          // underlineColorAndroid="#303030"
          placeholder="英文+数字"
          // clearTextOnFocus={true}
          clearButtonMode="while-editing"
          style={{flex: 1,marginBottom:px2dp(10),}}
          onChangeText={(input) => this.setState({username: input})}
          ></TextInput>
        </View>
        <View style={styles.item}><Text style={styles.textStyle}>验证码：</Text></View>
        <View style={styles.item}>
          <TextInput
            // underlineColorAndroid="gray"
            placeholder="六位"
             keyboardType = 'numeric'
            // clearTextOnFocus={true}
            clearButtonMode="while-editing"
            style={{flex: 1}}
            onChangeText={(input) => this.setState({code: input})}>
          </TextInput>
          <GetCode phone={this.state.username}   GetVerificationCode={()=>this.GetVerificationCode()}   />
        </View>
        <View style={{ flexDirection: 'row',alignItems: 'center',marginLeft: px2dp(90)}}></View>
        <TouchableHighlight style={styles.login} underlayColor='#0D9DB5' onPress={()=> this.Sumit()}>
          <Text style={styles.loginText}>提交</Text>
        </TouchableHighlight>

      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f1f1f1',
    marginTop:0,
  },
  back:{
      marginLeft:px2dp(42),
      width:px2dp(70),
      marginTop:px2dp(20),
  },
  item: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: px2dp(84),
      marginRight:px2dp(84),
      marginTop:px2dp(10)
  },
  textStyle: {
      fontSize: px2dp(32),
      color: '#303030',
      marginLeft:px2dp(4),
  },
  login: {
      height:px2dp(91),
      backgroundColor: '#0D9DB5',
      marginTop:px2dp(80),
      marginLeft: px2dp(84),
      marginRight: px2dp(84),
      width:px2dp(583),
      justifyContent: 'center',
      borderRadius:20,
  },
  loginText: {
      fontSize: px2dp(30),
      alignSelf: 'center',
      color: '#FFF'
  },
  noneAccount:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  reg:{
      fontSize:px2dp(24),
      borderBottomWidth:1,
      borderBottomColor:'#333',
  },
  iconView:{
      width:px2dp(39),
      height:px2dp(32),
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


export default Register;