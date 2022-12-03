import React from "react";
import { Image, Text, View } from "react-native";
import DadosItens from "../../Components/DadosItens";
import PaginaDadosStyle from "../../Styles/PaginaDadosStyle"


export default function PaginaDados(props){
return(
    <View style={PaginaDadosStyle.keyboardHide.body}>
        <View style={PaginaDadosStyle.keyboardHide.head}>
        <View style={PaginaDadosStyle.keyboardHide.imageContainer}>
            <Image style={PaginaDadosStyle.keyboardHide.image} resizeMode={'stretch'} source={props.usuario.perfil.Image}/>
        </View>
        <Text style={PaginaDadosStyle.keyboardHide.name}>{props.usuario.perfil.nome}</Text>
        </View>
        <View style={PaginaDadosStyle.keyboardHide.itensContainer}>
        <DadosItens border={true} image={require('../../assets/card1.png')} titulo={'CPF'} text={props.usuario.perfil.CPF}/>
        <DadosItens border={true} image={require('../../assets/card2.png')} titulo={'Cartão de vacina'} text={props.usuario.perfil.CartaoDeVacina}/>
        <DadosItens border={false} image={require('../../assets/card3.png')} titulo={'Data de Nascimento'} text={props.usuario.perfil.DataDeNascimento}/>
        <Text>{'\n'}</Text>
        <View style={{width:'90%', height:50, borderRadius:12,  borderWidth:1}}>

        </View>
        </View>
    </View>
);
}