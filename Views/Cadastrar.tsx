import React from "react";
import { Image, View, Text } from "react-native";
import CadastrarStyle from "../Styles/CadastrarStyle";

export default function Cadastrar(){
    return(
        <View style={CadastrarStyle.KeyboardShow.body}>
            <Image style={CadastrarStyle.KeyboardShow.logo} source={require('../assets/picwish1.png')}/>
            <Text>{'\n'}</Text>
            <View style={CadastrarStyle.KeyboardShow.container}>
            <Text>{'\n'}</Text>

            </View>
        </View>
    );
}