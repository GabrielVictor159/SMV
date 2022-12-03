import { Overlay } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, Keyboard } from "react-native";
import DadosItens from "../../Components/DadosItens";
import InputsOverlay from "../../Components/InputsOverlay";
import SucessoOverlay from "../../Components/SucessoOverlay";
import cores from "../../Styles/cores";
import PaginaDadosStyle from "../../Styles/PaginaDadosStyle"


export default function PaginaDados(props) {
    const [gerenciarConta, setGerenciarConta] = useState(false);
    const [alterarEmail, setAlterarEmail] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [alterarEmailInputAntigo, setAlterarEmailInputAntigo] = useState('');
    const [alterarEmailInputNovo, setAlterarEmailInputNovo] = useState('');
    const [alterarEmailSucesso, setAlterarEmailSucesso] = useState(false);
    const [alterarSenha, setAlterarSenha] = useState(false)
    const [alterarSenhaInputAntigo, setAlterarSenhaInputAntigo] = useState('');
    const [alterarSenhaInputNovo, setAlterarSenhaInputNovo] = useState('');
    const [alterarSenhaInputConfirma, setAlterarSenhaInputConfirma] = useState('');
    const [alterarSenhaSucesso, setAlterarSenhaSucesso] = useState(false);
    const toggleOverlay = () => {
        setAlterarSenha(false)
        setAlterarEmail(false)
        setAlterarEmailSucesso(false)
        setAlterarSenhaSucesso(false)

    };
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

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

                <TouchableOpacity style={PaginaDadosStyle.keyboardHide.gerenciarContaContainer} onPress={() => { setGerenciarConta(true) }}>
                    <>
                        <Image style={PaginaDadosStyle.keyboardHide.gerenciarContaImage} source={require('../../assets/group.png')} />
                        <Text style={PaginaDadosStyle.keyboardHide.gerenciarContaText}>{'Gerenciar Conta'}</Text>
                        <Image style={PaginaDadosStyle.keyboardHide.iconSeta} resizeMode={'stretch'} source={require('../../assets/_.png')} />
                    </>
                </TouchableOpacity>
                <Text>{'\n'}</Text>
                <TouchableOpacity style={PaginaDadosStyle.keyboardHide.gerenciarContaContainer}
                    onPress={() => {
                        props.navigationReset.reset({
                            index: 0,
                            routes: [{ name: 'Login' }],
                        })
                    }}
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



            <Overlay isVisible={gerenciarConta} onBackdropPress={toggleOverlay} fullScreen={false} overlayStyle={{ width: '100%', height: 300, backgroundColor: 'white', alignItems: 'center' }}>
                <View style={{ width: 140, height: 50, borderBottomWidth: 3, borderColor: '#0D5692', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 17, color: '#6F6F6F' }}>{'Gerenciar Conta'}</Text>
                </View>
                <Text>{'\n'}</Text>

                <TouchableOpacity style={{ width: '90%', height: 45, borderRadius: 15, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }} onPress={()=>{setAlterarEmail(true); setGerenciarConta(false)}}>
                    <>
                        <View style={{ width: '60%', height: '90%', borderBottomWidth: 3, borderColor: '#0D5692', justifyContent: 'center' }}>
                            <Image style={{ width: 20, height: 20, position: 'absolute', left: 20 }} resizeMode={'center'} source={require('../../assets/user1.png')} />
                            <Text style={{ left: '30%' }}>{'Alterar Email'}</Text>
                        </View>
                        <Image style={PaginaDadosStyle.keyboardHide.iconSeta} resizeMode={'stretch'} source={require('../../assets/_.png')} />
                    </>
                </TouchableOpacity>
                <Text>{'\n'}</Text>
                <TouchableOpacity style={{ width: '90%', height: 45, borderRadius: 15, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }} onPress={()=>{setAlterarSenha(true); setGerenciarConta(false)}}>
                    <>
                        <View style={{ width: '60%', height: '90%', borderBottomWidth: 3, borderColor: '#0D5692', justifyContent: 'center' }}>
                            <Image style={{ width: 20, height: 20, position: 'absolute', left: 20 }} resizeMode={'center'} source={require('../../assets/padlock.png')} />
                            <Text style={{ left: '30%' }}>{'Alterar Senha'}</Text>
                        </View>
                        <Image style={PaginaDadosStyle.keyboardHide.iconSeta} resizeMode={'stretch'} source={require('../../assets/_.png')} />
                    </>
                </TouchableOpacity>
            </Overlay>

            <InputsOverlay
                isVisible={alterarEmail}
                onBackdropPress={toggleOverlay}
                overlayStyle={[styles.overlayStyles, { height: isKeyboardVisible === false ? '55%' : 500, top: isKeyboardVisible === false ? '50%' : 50 }]}
                titulo={'Alterar Email'}
                tituloStyle={styles.overlayTitulo}
                iconInput1={require("../../assets/user1.png")}
                InputStyle1={styles.overlayInput}
                KeyboardType1={'email-address'}
                Placeholder1={'Digite seu email antigo'}
                onChangeText1={setAlterarEmailInputAntigo}
                iconInput2={require("../../assets/user1.png")}
                InputStyle2={styles.overlayInput}
                KeyboardType2={'email-address'}
                Placeholder2={'Digite seu Novo email'}
                onChangeText2={setAlterarEmailInputNovo}
                buttonWidth={"60%"}
                buttonHeight={70}
                buttonColor={"#89C5FD"}
                buttonText={'Alterar'}
                buttonAction={props.usuario.alterarEmail}
                actionParam1={alterarEmailInputAntigo}
                actionParam2={alterarEmailInputNovo}
                overlaySucesso={setAlterarEmailSucesso}
            />
            <SucessoOverlay
                overlayStyle={styles.overlaySucessoStyle}
                isVisible={alterarEmailSucesso}
                onBackdropPress={toggleOverlay}
                titulo={"Seu E-mail foi alterado!"}
                texto={"Agora utilize esse novo email para acessar! "}
                buttonWidth={"60%"}
                buttonHeight={70}
                buttonColor={"#89C5FD"}
                buttonText={'voltar'}
                buttonAction={toggleOverlay}
            />
            <InputsOverlay
                isVisible={alterarSenha}
                onBackdropPress={toggleOverlay}
                overlayStyle={[styles.overlayStyles, { height: isKeyboardVisible === false ? '60%' : 600, top: isKeyboardVisible === false ? '50%' : 50 }]}
                titulo={'Alterar Senha'}
                tituloStyle={styles.overlayTitulo}
                iconInput1={require("../../assets/padlock.png")}
                InputStyle1={styles.overlayInput}
                KeyboardType1={'default'}
                Placeholder1={'Digite sua senha antiga'}
                SecureText1={true}
                onChangeText1={setAlterarSenhaInputAntigo}
                iconInput2={require("../../assets/padlock.png")}
                InputStyle2={styles.overlayInput}
                KeyboardType2={'default'}
                Placeholder2={'Digite sua nova senha'}
                SecureText2={true}
                onChangeText2={setAlterarSenhaInputNovo}
                iconInput3={require("../../assets/padlock.png")}
                InputStyle3={styles.overlayInput}
                KeyboardType3={'default'}
                Placeholder3={'confirme sua nova senha'}
                SecureText3={true}
                onChangeText3={setAlterarSenhaInputConfirma}
                buttonWidth={"60%"}
                buttonHeight={70}
                buttonColor={"#89C5FD"}
                buttonText={'Alterar'}
                buttonAction={props.usuario.alterarSenha}
                actionParam1={alterarSenhaInputAntigo}
                actionParam2={alterarSenhaInputNovo}
                actionParam3={alterarSenhaInputConfirma}
                overlaySucesso={setAlterarSenhaSucesso}
            />
            <SucessoOverlay
                overlayStyle={styles.overlaySucessoStyle}
                isVisible={alterarSenhaSucesso}
                onBackdropPress={toggleOverlay}
                titulo={"Sua senha foi alterado!"}
                texto={"Agora utilize essa nova senha para acessar!"}
                buttonWidth={"60%"}
                buttonHeight={70}
                buttonColor={"#89C5FD"}
                buttonText={'voltar'}
                buttonAction={toggleOverlay}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    overlayStyles: {
        width: "100%",

        position: "absolute",

    },
    overlayInputStyle: {
        width: "100%",
        height: 500,
        position: "absolute",
    },
    overlayImagesInput: {
        width: "100%",

        position: "absolute",
    },
    overlayTitulo: {
        fontSize: 18,
        width:150,
        height:40,
        textAlign:'center',
        borderBottomWidth:2,
        borderColor:'#0D5692'
    },
    overlayInput: {
        width: 300,
        height: 40,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 30,

    },
    overlaySucessoStyle: {
        width: "100%",
        height: "60%",
        position: "absolute",
        top: "40%",
    },
})
