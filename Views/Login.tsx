import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TextInput, Text } from "react-native";
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
  useEffect(() => {
    geral.keyboardStatus(setKeyboard);
  });
  return (
    <View style={LoginStyle.KeyboardShow.body}>
      <Image
        style={LoginStyle.KeyboardShow.logo}
        source={require("../assets/picwish1.png")}
      />
      <View style={LoginStyle.KeyboardShow.container}>
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
        <Text>{"\n\n\n\n"}</Text>
        <Button1
          width={220}
          height={65}
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
          height={65}
          borderRadius={15}
          fontSize={20}
          tipoNavegacao="navigate"
          navegacao="PaginaInicial"
          texto="Cadastar-se"
          textColor="#46A6FF"
          color1={'#DFDEDE'}
          color2={'#FFFFFF'}
        />
      </View>
    </View>
  );
}
