import { StyleSheet } from "react-native";

const PaginaNotificacaoStyle = StyleSheet.create({
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
    notificacaoContainer:{
        width:'100%', height:'67%',
        alignItems:'center',
        overflow:'visible',
    },
})

export default PaginaNotificacaoStyle ;