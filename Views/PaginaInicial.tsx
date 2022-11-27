import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import PaginaInicialStyle from "../Styles/PaginaInicialStyle";
import Button1 from "../Components/Button1";
import cores from "../Styles/cores";
import { useNavigation } from "@react-navigation/native";

export default function PaginaInicial() {
    const navigation: any = useNavigation();
    return (
        <View style={PaginaInicialStyle.body}>
            <Image style={PaginaInicialStyle.logo} source={require('../assets/picwish1.png')} />
            <Text style={PaginaInicialStyle.titulo}>{'Sistema \n de \n Monitoramento de Vacinas'}</Text>
            <View style={PaginaInicialStyle.container}>
                <Image style={PaginaInicialStyle.image1} source={require('../assets/Medical-research-pana1.png')} />
                <Image style={PaginaInicialStyle.image2} source={require('../assets/18169750201642442563-1281.png')} />
                <View style={PaginaInicialStyle.button}>
                    <Button1
                        width={220}
                        height={55}
                        borderRadius={15}
                        fontSize={20}
                        tipoNavegacao="navigate"
                        navegacao="Login"
                        texto="Logar"
                        color1={cores.background}
                        color2={cores.background}
                    />
                </View>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Cadastrar')}
                style={PaginaInicialStyle.textLinkContainer}>
                    <Text style={PaginaInicialStyle.link}>
                        {'Cadastrar'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}