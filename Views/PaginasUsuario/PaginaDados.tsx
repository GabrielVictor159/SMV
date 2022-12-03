import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import DadosItens from "../../Components/DadosItens";
import PaginaDadosStyle from "../../Styles/PaginaDadosStyle"


export default function PaginaDados(props) {
    return (
        <View style={PaginaDadosStyle.keyboardHide.body}>
            <View style={PaginaDadosStyle.keyboardHide.head}>
                <View style={PaginaDadosStyle.keyboardHide.imageContainer}>
                    <Image style={PaginaDadosStyle.keyboardHide.image} resizeMode={'stretch'} source={props.usuario.perfil.Image} />
                </View>
                <Text style={PaginaDadosStyle.keyboardHide.name}>{props.usuario.perfil.nome}</Text>
                <TouchableOpacity style={PaginaDadosStyle.keyboardHide.alterImageContainer} >
                    <Image style={{ width: '80%', height: '80%' }} resizeMode={'contain'} source={require('../../assets/pencil.png')} />
                </TouchableOpacity>
            </View>
            <View style={PaginaDadosStyle.keyboardHide.itensContainer}>
                <DadosItens border={true} image={require('../../assets/card1.png')} titulo={'CPF'} text={props.usuario.perfil.CPF} />
                <DadosItens border={true} image={require('../../assets/card2.png')} titulo={'Cartão de vacina'} text={props.usuario.perfil.CartaoDeVacina} />
                <DadosItens border={false} image={require('../../assets/card3.png')} titulo={'Data de Nascimento'} text={props.usuario.perfil.DataDeNascimento} />
                <Text>{'\n'}</Text>

                <TouchableOpacity style={PaginaDadosStyle.keyboardHide.gerenciarContaContainer}>
                    <>
                        <Image style={PaginaDadosStyle.keyboardHide.gerenciarContaImage} source={require('../../assets/group.png')} />
                        <Text style={PaginaDadosStyle.keyboardHide.gerenciarContaText}>{'Gerenciar Conta'}</Text>
                        <Image style={PaginaDadosStyle.keyboardHide.iconSeta} resizeMode={'stretch'} source={require('../../assets/_.png')} />
                    </>
                </TouchableOpacity>
                <Text>{'\n'}</Text>
                <TouchableOpacity style={PaginaDadosStyle.keyboardHide.gerenciarContaContainer}>
                    <>
                        <Image style={PaginaDadosStyle.keyboardHide.gerenciarContaImage} source={require('../../assets/exit.png')} />
                        <View style={PaginaDadosStyle.keyboardHide.sairTextContainer}>
                            <Text style={PaginaDadosStyle.keyboardHide.sairText1}>{'Sair'}</Text>
                            <Text style={PaginaDadosStyle.keyboardHide.sairText2}>{'Desconectar sua conta desse aparrelho'}</Text>
                        </View>

                        <Image style={PaginaDadosStyle.keyboardHide.iconSeta} resizeMode={'stretch'} source={require('../../assets/_.png')} />
                    </>
                </TouchableOpacity>
            </View>
        </View>
    );
}