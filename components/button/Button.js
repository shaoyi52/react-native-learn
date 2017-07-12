import React ,{ Component,Proptypes} from 'react';
import { 
    TouchableOpacity, 
    Platform, 
    View,
    TouchableHighlight,
    StyleSheet,
    Text
} from 'react-native';

import buttonDefaultStyles from './style';
import { ButtonProps } from './PropsType';

class Button extends Component {
    static defaultProps = {
        pressIn: false,
        disabled: false,
        activeStyle:{},
        loading: false,
        onClick: (_x?:any) =>{
        },
        onPressIn: (_x?:any) =>{
        },
        onPressOut: (_x?:any) =>{
        },
        onShowUnderlay: (_x?:any) => {
        },
        onHideUnderlay: (_x?:any) => {
        },
        styles: buttonDefaultStyles,
    };

    constructor(props) {
      super(props);    
      this.state = {
        pressIn: false,
        touchIt: false,
      };
    };

    render(){
        const {
           size = 'large',type= 'default',disabled,activeStyle,onClick,style,
           styles,loading, ...restProps, 
        }=this.props;
        let _this=this;
        console.log('restProps',restProps)
        const buttonStyles = styles;
        ['activeOpacity', 'underlayColor', 'onPress', 'onPressIn',
         'onPressOut', 'onShowUnderlay', 'onHideUnderlay'].forEach((prop) => {
           if (restProps.hasOwnProperty(prop)) {
             delete restProps[prop];
           }
         });

        const textStyle = [
          buttonStyles[`${size}RawText`],
          buttonStyles[`${type}RawText`],
          disabled && buttonStyles.disabledRawText,
          this.state.pressIn && buttonStyles[`${type}HighlightText`],
        ];

        const wrapperStyle = [
          buttonStyles.wrapperStyle,
          buttonStyles[`${size}Raw`],
          buttonStyles[`${type}Raw`],
          disabled && buttonStyles.disabledRaw,
          this.state.pressIn && activeStyle && buttonStyles[`${type}Highlight`],
          activeStyle && this.state.touchIt && activeStyle,
          style,
        ];
        const underlayColor = StyleSheet.flatten(
          buttonStyles[activeStyle ? `${type}Highlight` : `${type}Raw`],
        ).backgroundColor;

        const indicatorColor =StyleSheet.flatten(
          this.state.pressIn ? buttonStyles[`${type}HighlightText`] : buttonStyles[`${type}RawText`],
        ).color;

        return(
            <TouchableHighlight
                activeOpacity={1}
                underlayColor={underlayColor}
                style={wrapperStyle}
                onPress={(e?,any) => onClick && onClick(e)}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
                onShowUnderlay={this.onShowUnderlay}
                onHideUnderlay={this.onHideUnderlay}
                disabled={disabled}
                {...restProps} >

                <View style={buttonStyles.container}>
                    <Text>{this.props.children}</Text>
                </View>
            </TouchableHighlight>
            )
    };
};


export default Button;