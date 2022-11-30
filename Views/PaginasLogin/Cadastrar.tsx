import React, { useState } from "react";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import CadastrarStyle from "../../Styles/CadastrarStyle";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Inputs from "../../Components/Inputs";
import cores from "../../Styles/cores";
import Button1 from "../../Components/Button1";
import { useNavigation } from "@react-navigation/native";




export default function Cadastrar() {
    const navigation: any = useNavigation();
    const [data, setData] = useState('')
    const [datePicker, setDatePicker] = useState(false);
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const hideDatePicker = () => {
        setData('')
        setDatePicker(false)
    };
    const handleConfirm = (date) => {
        let a = date.toISOString();
        setData(a.substring(8, 10) + '/' + a.substring(5, 7) + '/' + a.substring(0, 4))
        setDatePicker(false)
    };
    return (
        <View style={CadastrarStyle.KeyboardShow.body}>
            <Image style={CadastrarStyle.KeyboardShow.logo} source={require('../../assets/picwish1.png')} />
            <Text>{'\n'}</Text>
            <View style={CadastrarStyle.KeyboardShow.container}>
                <Text>{'\n\n'}</Text>
                <Inputs
                    width={240}
                    height={45}
                    borderBottomWidth={3}
                    borderColor={cores.background}
                    keyboardType={"default"}
                    placeholder={"Nome Completo"}
                    onChangeText={setNome}
                />
                <Text>{'\n'}</Text>
                <Inputs
                    width={240}
                    height={45}
                    borderBottomWidth={3}
                    borderColor={cores.background}
                    keyboardType={"numeric"}
                    placeholder={"CPF"}
                    onChangeText={setCpf}
                />
                <Text>{'\n'}</Text>
                <Inputs
                    width={240}
                    height={45}
                    borderBottomWidth={3}
                    borderColor={cores.background}
                    onFocus={() => { setDatePicker(true); console.log(data) }}
                    keyboardType={"numeric"}
                    placeholder={"Data de nascimento"}
                    value={data}
                />
                <Text>{'\n'}</Text>
                <DateTimePickerModal

                    minimumDate={new Date('1900-01-01')}
                    maximumDate={new Date()}
                    isVisible={datePicker}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <Inputs
                    width={240}
                    height={45}
                    borderBottomWidth={3}
                    borderColor={cores.background}
                    keyboardType={"email-address"}
                    placeholder={"E-mail"}
                    onChangeText={setEmail}
                />
                <Text>{'\n'}</Text>
                <Inputs
                    width={240}
                    height={45}
                    borderBottomWidth={3}
                    borderColor={cores.background}
                    keyboardType={"default"}
                    secureText={true}
                    placeholder={"Senha"}
                    onChangeText={setConfirmarSenha}
                />
                <Text>{'\n\n'}</Text>
                <Button1
                    width={220}
                    height={55}
                    borderRadius={15}
                    fontSize={20}
                    texto="Cadastar"
                    textColor="white"
                    color1={cores.background}
                    color2={cores.background}
                />
                <Text>{'\n'}</Text>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                >
                    <Text style={CadastrarStyle.KeyboardShow.voltar}>{'Voltar'}</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}