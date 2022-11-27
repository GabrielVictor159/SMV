import { StyleSheet } from "react-native";
import geral from "./geral";
import cores from "./cores";
const KeyboardShow = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: cores.background,
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    logo: {
        width: 100,
        height: 100
    },
    container: {
        width: '100%',
        height: '75%',
        backgroundColor: 'white',
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        alignItems: 'center'
    }
})
const KeyboardHide = StyleSheet.create({

})
export default { KeyboardShow, KeyboardHide }