import React from "react";
import { View } from "react-native";
import PaginaInicioStyle from "../../Styles/PaginaInicioStyle";



export default function PaginaInicio(props){
    return(
        <View style={PaginaInicioStyle.keyboardHide.body}>
            <View style={PaginaInicioStyle.keyboardHide.head}>

            </View>
        </View>
    );
}