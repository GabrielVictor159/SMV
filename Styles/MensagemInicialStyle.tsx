import { StyleSheet } from "react-native"
import geral from "./geral"

const MensagemInicialStyle = StyleSheet.create({
    body:{
        width:geral.windowWidth,
        height:'100%',
        alignItems:'center',
        backgroundColor:'white'

    },
    image:{
        width:350,
        height:300,
        top:'10%'
    },
    titulo:{
        width:'70%',
        textAlign:'center',
        fontSize:33,
        top:'13%'
    },
    text1:{
        textAlign:'center',
        fontSize:16,
        width:'90%',
        top:'20%',
    },
    text2:{
        color:'#FF0000',
        fontSize:16,
        top:'22%'

    },
    button:{
        top:'30%'
    },
})



export default MensagemInicialStyle