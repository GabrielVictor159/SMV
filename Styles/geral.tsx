import { Dimensions, Keyboard } from 'react-native';
const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;
function keyboardStatus(callback){
    const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          callback(false)
        }
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          callback(true)
        });
}   
 const geral ={
    windowHeight,
    windowWidth,
    keyboardStatus,
 }

 export default geral
