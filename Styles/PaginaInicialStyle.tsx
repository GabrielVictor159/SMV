import { StyleSheet } from "react-native"
import cores from "./cores"
import geral from "./geral"

const PaginaInicialStyle = StyleSheet.create({
    body:{
        flexDirection:'column',
        justifyContent:'flex-end',
        width:geral.windowWidth,
        height:'100%',
        backgroundColor:cores.background,
        alignItems:'center'
    },
    container:{
    width:'100%',
    height:400,
    backgroundColor:'white',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    alignItems:'center'

    },
    image1:{
        width:350,
        height:300,
        top:'-40%',
        
    },
    image2:{
        width:75,
        height:75,
        top:'-47%'
    },
    button:{
        top:'-40%'
    },
    textLinkContainer:{
        top:'-30%'
    },
    link:{
        fontSize:20,
        color:cores.background,

    },
    logo:{
        width:100,
        height:100,
        top:'-25%'
    },
    titulo:{
        fontSize:20,
        textAlign:'center',
        top:'-23%'

    },
})

export default PaginaInicialStyle