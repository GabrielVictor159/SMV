import { Overlay } from "@rneui/themed";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import DadosItens from "../../Components/DadosItens";
import cores from "../../Styles/cores";
import PaginaDadosStyle from "../../Styles/PaginaDadosStyle"


export default function PaginaDados(props) {
    const [gerenciarConta, setGerenciarConta] = useState(false)
    const toggleOverlay = () => {
        setGerenciarConta(false)
      };
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

                <TouchableOpacity style={PaginaDadosStyle.keyboardHide.gerenciarContaContainer} onPress={()=>{setGerenciarConta(true)}}>
                    <>
                        <Image style={PaginaDadosStyle.keyboardHide.gerenciarContaImage} source={require('../../assets/group.png')} />
                        <Text style={PaginaDadosStyle.keyboardHide.gerenciarContaText}>{'Gerenciar Conta'}</Text>
                        <Image style={PaginaDadosStyle.keyboardHide.iconSeta} resizeMode={'stretch'} source={require('../../assets/_.png')} />
                    </>
                </TouchableOpacity>
                <Text>{'\n'}</Text>
                <TouchableOpacity style={PaginaDadosStyle.keyboardHide.gerenciarContaContainer} 
                onPress={()=>{props.navigationReset.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                  })}}
                >
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



            <Overlay isVisible={gerenciarConta} onBackdropPress={toggleOverlay} fullScreen={false} overlayStyle={{width:'100%', height:300, backgroundColor:'white', alignItems:'center'}}>
                  <View style={{width:140, height:50,borderBottomWidth:3, borderColor:'#0D5692', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:17, color:'#6F6F6F'}}>{'Gerenciar Conta'}</Text>
                  </View>
                  <Text>{'\n'}</Text>
                  
                  <TouchableOpacity style={{width:'90%', height:45, borderRadius:15, borderWidth:1, alignItems:'center', justifyContent:'center'}} >
                    <>
                  <View style={{width:'60%', height:'90%',borderBottomWidth:3, borderColor:'#0D5692', justifyContent:'center'}}>
                  <Image style={{width:20, height:20, position:'absolute', left:20}} resizeMode={'center'} source={require('../../assets/user1.png')}/>
                  <Text style={{left:'30%'}}>{'Alterar Email'}</Text>
                  </View>
                  <Image style={PaginaDadosStyle.keyboardHide.iconSeta} resizeMode={'stretch'} source={require('../../assets/_.png')} />
                  </>
                  </TouchableOpacity>
                  <Text>{'\n'}</Text>
                  <TouchableOpacity style={{width:'90%', height:45, borderRadius:15, borderWidth:1, alignItems:'center', justifyContent:'center'}}>
                    <>
                  <View style={{width:'60%', height:'90%',borderBottomWidth:3, borderColor:'#0D5692', justifyContent:'center'}}>
                  <Image style={{width:20, height:20, position:'absolute', left:20}} resizeMode={'center'} source={require('../../assets/padlock.png')}/>
                  <Text style={{left:'30%'}}>{'Alterar Senha'}</Text>
                  </View>
                  <Image style={PaginaDadosStyle.keyboardHide.iconSeta} resizeMode={'stretch'} source={require('../../assets/_.png')} />
                  </>
                  </TouchableOpacity>
            </Overlay>


        </View>
    );
}