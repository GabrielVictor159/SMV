import { StyleSheet } from "react-native";
import geral from "./geral";
import cores from "./cores";
const KeyboardShow = StyleSheet.create({
    body: {
        width: geral.windowWidth,
        height: '100%',
        backgroundColor: cores.background,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    selectContainer: {
        width: 200,
        height: 30,
        backgroundColor: '#D9D9D9',
        borderRadius: 45,
        flexDirection:'row',
        justifyContent:'center'
    },
    selectItem:{
        width:'49%',
        height:'100%',
        alignItems:'center',
        borderRadius: 45,
        justifyContent:'center',
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '75%',
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        top: -20,

    },
    inputsContainer: {
        height: 170,
        justifyContent: 'space-between',

    },
    linkRecuperarSenha: {
        color: '#46A6FF',
        fontSize: 16,
        top: 10
    },
    govBrContainer: {

        width: 180,
        height: 40,
        backgroundColor: '#F1F1F1',
        borderRadius: 20,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    govBrTexts: {
        color: '#0250F9',
        fontSize: 16
    }
})
export default { KeyboardShow }