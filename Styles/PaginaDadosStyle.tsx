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
    alterImageContainer: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 100,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: '80%',
        left: '58%',
        borderWidth: 2,
        borderColor: '#979696'
    },
    itensContainer: {
        width: '100%',
        height: '60%',
        top: 150,
        alignItems: 'center'
    },
    gerenciarContaContainer: {
        width: '90%',
        height: 50,
        borderRadius: 12,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    gerenciarContaImage: {
        width: 40,
        height: 40,
        left: 10,
    },
    gerenciarContaText: {
        fontSize: 20,
        fontWeight: 'bold',
        left: 20
    },
    iconSeta: {
        width: 13,
        height: 15,
        position: 'absolute',
        top: '35%',
        left: '93%',
        tintColor: '#787777'
    },
    sairTextContainer: {
        width: '70%',
        height: '100%',
        left: 20
    },
    sairText1: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    sairText2: {
        fontSize: 13,
        color: '#787777'
    },
})

const keyboardShow = StyleSheet.create({

})

export default { keyboardHide, keyboardShow }