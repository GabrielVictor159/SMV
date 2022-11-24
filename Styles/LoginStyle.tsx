import { StyleSheet } from "react-native";
import geral from "./geral";
import cores from "./cores";
const KeyboardShow =  StyleSheet.create({
    body:{
        width:geral.windowWidth,
        height:'100%',
        backgroundColor:cores.background,
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    container:{
        backgroundColor:'white',
        width:'100%',
        height:'70%',
        borderTopRightRadius:60,
        borderTopLeftRadius:60,
        alignItems:'center'
    },
    logo:{
        width:100,
        height:100,
        top:-20,

    },
    inputsContainer:{
        height:170,
        justifyContent:'space-between',
        
    },

})
const KeyboardHide =  StyleSheet.create({
    body:{
        width:geral.windowWidth,
        height:geral.windowHeight,
        backgroundColor:cores.background
    }
})
export default {KeyboardShow, KeyboardHide}