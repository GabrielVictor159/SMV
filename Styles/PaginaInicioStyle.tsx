import { StyleSheet } from "react-native";

const keyboardHide = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E9E9E9'
    },
    head:{
        width:'100%',
        height:100,
        backgroundColor:'#89C5FD',
        elevation:20
    }
})

const keyboardShow = StyleSheet.create({

})

export default {keyboardHide,keyboardShow}