import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Notificacao from "../../Components/Notificacao";
import PaginaNotificacaoStyle from "../../Styles/PaginaNotificacaoStyle";



export default function PaginaNotificacao(props){
    let [notificacao, setNotificacao] = useState(props.usuario.Notificacao);
    let [atualizacao, setAtualizacao] = useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setAtualizacao(atualizacao+1)
        },1000)
       
    },[])
    function mapReturn(callback) {
        return callback.map((value, index) => {
            return (
                <Notificacao key={index} text={value.text} data={value.data} vizualizado={value.vizualizado}/>
            );
        });
    };
    function marcarTodas(){
        let variavelArmazenadora = props.usuario
        for(let i=0; i<props.usuario.Notificacao.length; i++){
            variavelArmazenadora.Notificacao[i].vizualizado=true
        }
        props.setUsuario(variavelArmazenadora)
        setNotificacao(variavelArmazenadora.Notificacao)
    }
    return(
        <View style={PaginaNotificacaoStyle.body}>
             <View style={PaginaNotificacaoStyle.head}>
                
                <Image style={PaginaNotificacaoStyle.logo} source={require('../../assets/picwish1.png')} />
                <View style={PaginaNotificacaoStyle.textHeadContaienr}>
                    
                    <Text style={{ fontSize: 20 }}>{'Olá, '}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.usuario.perfil.nome}</Text>
                    <Text style={{ fontSize: 17, color: '#514C4C' }}>{`CPF - ${props.usuario.perfil.CPF}`}</Text>
                </View>
                <View style={PaginaNotificacaoStyle.imagemPerfilContainer}>
                    <Image style={{ width: '100%', height: '100%' }} source={props.usuario.perfil.Image} />
                </View>
            </View>
            <Text>{'\n'}</Text>
            <View style={{width:'90%', flexDirection:'row', justifyContent:'space-between'}}>
            <Text>{'Avisos'}</Text>
            <TouchableOpacity onPress={()=>{marcarTodas()}}>
            <Text>{'Marcar todas como lidas'}</Text>
            </TouchableOpacity>
            </View>
            <Text>{'\n\n'}</Text>
            <View style={PaginaNotificacaoStyle.notificacaoContainer}>
            <ScrollView>
            {mapReturn(props.usuario.Notificacao)}
            </ScrollView>
            </View>
        </View>
    );
}