import {PixelRatio,Dimensions} from 'react-native'

const deviceH = Dimensions.get('window').height;
const deviceW = Dimensions.get('window').width;
const ratio=PixelRatio.get();
const pixel=1 / PixelRatio.get();
// UI 默认给图是 750
const basePx = 750
//px转dp 方法一
export function px2dp(uiElementPx) {
    return uiElementPx *  deviceW / basePx
}

//px转dp 方法二
export function pxTodp(px:number):number{
    if(typeof px!=='number'){
      console.error('输入必须为数字')
      return px;
    }

    return px/PixelRatio.get();
}

/**
 * 格式化字符串
 * @template 模板字符串
 * const message = stringFormat('{0} and {1} is awesome!', 'react', 'rn);
 * >> message: 'react and rn is awesome！'
 */
exports.stringFormat = function stringFormat(template: string, ...values: any): string {
  const args = values;
  return template.replace(/{(\d+)}/g, (match, number) => {
    return typeof args[number] !== 'undefined' ? args[number] : match;
  });
};

/**
 * 屏幕尺寸
 */
exports.SCREEN_WIDTH = deviceH;
exports.SCREEN_HEIGHT = deviceW;

let currentBookCover = '';
/**
 * 暂存当前书的封面
 */
exports.saveBookCover = function(cover) {
  currentBookCover = cover;
};

/**
 * 获取暂存的当前书的封面
 */
exports.getBookCover = function() {
  return currentBookCover;
};