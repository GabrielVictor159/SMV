import { StyleSheet } from "react-native";

const keyboardHide = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    head: {
        width: '100%',
        height: 100,
        backgroundColor: '#89C5FD',
        elevation: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        width: 70,
        height: 70,
        left: 10,
        top: 10
    },
    textHeadContaienr: {
        flexDirection: 'row',
        width: 150,
        top: 15,
        left: '-12%',
        flexWrap: 'wrap'
    },
    imagemPerfilContainer: {
        width: 55,
        height: 55,
        borderWidth: 4,
        borderColor: 'white',
        backgroundColor: 'red',
        borderRadius: 100,
        overflow: 'hidden',
        top: 15,
        left: '-10%'
    },
    buscaContainer: {
        width: '80%',
        height: 50,
        borderWidth: 2,
        elevation: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#787777',
        flexDirection: 'row',
    },
    servicosContainer: {
        width: '90%',
        maxHeight:'68%',
        backgroundColor: 'white',
        borderWidth:2,
        borderColor:'#787777',
        elevation:15,
        borderRadius:15
    },
})

const keyboardShow = StyleSheet.create({

})

export default { keyboardHide, keyboardShow }