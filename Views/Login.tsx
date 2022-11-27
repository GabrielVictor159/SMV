import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import geral from "../Styles/geral";
import LoginStyle from "../Styles/LoginStyle";
import Inputs from "../Components/Inputs";
import cores from "../Styles/cores";
import Button1 from "../Components/Button1";

export default function Login() {
  const [keyboard, setKeyboard] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [paciente, setPaciente] = useState(true);
  const [funcionario, setFuncionario] = useState(false);
  return (
    <View style={LoginStyle.KeyboardShow.body}>
      <Image
        style={LoginStyle.KeyboardShow.logo}
        source={require("../assets/picwish1.png")}
      />
      <View style={LoginStyle.KeyboardShow.container}>
        <Text>{'\n'}</Text>
        <View style={LoginStyle.KeyboardShow.selectContainer}>
          <TouchableOpacity style={[LoginStyle.KeyboardShow.selectItem, { backgroundColor: paciente ? 'white' : 'transparent', top: paciente ? 2 : 0, elevation: paciente ? 10 : 0 }]}
            onPress={() => { setPaciente(true); setFuncionario(false); }}
          >
            <Text style={{ elevation: 10 }}>{'Paciente'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[LoginStyle.KeyboardShow.selectItem, { backgroundColor: funcionario ? 'white' : 'transparent', top: funcionario ? 2 : 0, elevation: funcionario ? 10 : 0 }]}
            onPress={() => { setPaciente(false); setFuncionario(true); }}
          >
            <Text style={{ elevation: 10 }}>{'Funcionário'}</Text>
          </TouchableOpacity>
        </View>
        <Text>{'\n'}</Text>
        <View style={LoginStyle.KeyboardShow.inputsContainer}>
          <Inputs
            width={240}
            height={45}
            borderBottomWidth={3}
            borderColor={cores.background}
            keyboardType={"email-address"}
            placeholder={"E-mail"}
            onChangeText={setEmail}
            image={require("../assets/user1.png")}
          />
          <Inputs
            width={240}
            height={45}
            borderBottomWidth={3}
            borderColor={cores.background}
            keyboardType={"default"}
            secureText={true}
            placeholder={"Senha"}
            onChangeText={setSenha}
            image={require("../assets/padlock.png")}
          />
        </View>
        <Text>{"\n\n"}</Text>
        <Button1
          width={220}
          height={55}
          borderRadius={15}
          fontSize={20}
          tipoNavegacao="navigate"
          navegacao="PaginaInicial"
          texto="Logar"
          textColor="white"
          color1={cores.background}
          color2={cores.background}
        />
        <Text>{"\n"}</Text>
        <Button1
          width={220}
          height={55}
          borderRadius={15}
          fontSize={20}
          tipoNavegacao="navigate"
          navegacao="Cadastrar"
          texto="Cadastar-se"
          textColor="#46A6FF"
          color1={'#DFDEDE'}
          color2={'#FFFFFF'}
        />
        <TouchableOpacity>
          <Text style={LoginStyle.KeyboardShow.linkRecuperarSenha}>{'Esqueceu a senha?'}</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
        <TouchableOpacity style={LoginStyle.KeyboardShow.govBrContainer}>
          <>
            <Text style={LoginStyle.KeyboardShow.govBrTexts}>{'Entrar com '}</Text>
            <Text style={[LoginStyle.KeyboardShow.govBrTexts, { fontWeight: '900' }]}>{'gov.br'}</Text>
          </>
        </TouchableOpacity>
      </View>
    </View>
  );
}
