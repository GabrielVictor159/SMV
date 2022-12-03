import { StyleSheet } from "react-native";
import cores from "./cores";

const keyboardHide = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    head: {
        width: '100%',
        height: 100,
        backgroundColor: cores.background,
        elevation: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center'
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: 'black',
        top: '50%',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    name: {
        top: '60%', fontSize: 20, fontWeight: 'bold'
    },
    itensContainer:{
        width:'100%',
        height:'60%',
        top:150,
        alignItems:'center'
    },
})

const keyboardShow = StyleSheet.create({

})

export default { keyboardHide, keyboardShow }