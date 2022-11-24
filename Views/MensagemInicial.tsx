import React from "react";
import { Image, Text, View } from "react-native";
import MensagemInicialStyle from "../Styles/MensagemInicialStyle";
import Button1 from "../Components/Button1";
import cores from "../Styles/cores";
export default function MensagemInicial(){
    return(
        <View style={MensagemInicialStyle.body}>
            <Image style={MensagemInicialStyle.image} source={require('../assets/coronavirus-vaccine-senior-woman-and-a-doctor-with-a-syringe-concept-illustration-in-flat-cartoon-style-vector.png')}/>
            <Text style={MensagemInicialStyle.titulo}>{'Monitore suas vacinas'}</Text>
            <Text style={MensagemInicialStyle.text1}>{'Um aplicativo de monitoramento a fim de ajudar a toda população a acompanhar e monitorar suas vacinas.'}</Text>
            <Text style={MensagemInicialStyle.text2}>{'A VACINA É SEGURA: PROTEJA-SE'}</Text>
            <View style={MensagemInicialStyle.button}>
            <Button1
                width={220}
                height={55}
                borderRadius={15}
                fontSize={20}
                tipoNavegacao="navigate"
                navegacao="PaginaInicial"
                texto="Proximo"
                textColor="white"
                color1={cores.background}
                color2={cores.background}
              />
            </View>
           
        </View>
    );
}