import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    input
} from 'react-native';
import { List,InputItem,Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import {px2dp} from '../../utils';
import Header from '../../common/Header';

const Item = List.Item;

class Login extends Component {
  constructor(props) {
    super(props); 
      this.state={
        value: 1
      };
  }

  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      console.log('error',error);
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        alert('校验失败');
      }
    });
  }
  onReset = () => {
    this.props.form.resetFields();
  }
  validateAccount = (rule, value, callback) => {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('帐号至少4个字符'));
    }
  }
  validatePassword =(rule, value, callback) =>{
    console.log("validatePassword",value);
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('密码至少4个字符'));
    }
  }
 

  componentWillMount() {
    //BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid());
  }

  componentWillUnmount() {
    //BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid);
  }


  render() {
    let _this=this;
    const { getFieldProps, getFieldError } = this.props.form;
    console.log(_this.props.form);
    let account=getFieldError('account') && getFieldError('account').join(',');
    let password=getFieldError('password') && getFieldError('password').join(',');
    let error=account||password;
    return (
        <View style={styles.container}>
          <Header {...this.props} title='登录' hasPress={true}/>
          <ScrollView
            style={{ flex: 1, backgroundColor: '#f5f5f9' }}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            >
             <List renderHeader={() => ''}
                renderFooter={() => error }
                style={{marginTop:150}}
              >
              <InputItem
                {...getFieldProps('account', {
                  // initialValue: '小蚂蚁',
                  rules: [
                    { required: true, message: '请输入帐号' },
                    { validator: this.validateAccount },
                  ],
                })}
                clear
                error={!!getFieldError('account')}
                onErrorClick={() => {
                  alert(getFieldError('account').join('、'));
                }}
                placeholder="请输入账号"
              >帐号</InputItem>

              <InputItem {...getFieldProps('password',{
                rules: [
                    { required: true, message: '请输入密码' },
                    { validator: this.validatePassword }
                  ]
                })} 
                clear
                error={!!getFieldError('password')}
                placeholder="请输入密码" type="password">
                密码
              </InputItem>
              <Item style={{marginTop:40}}>
                <Button type="primary" style={{backgroundColor:'#06BFFF'}} onClick={this.onSubmit} inline>提交验证</Button>
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


export default  createForm()(Login);