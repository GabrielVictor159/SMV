import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import ServiceLink from "../../Components/ServiceLink";
import PaginaInicioStyle from "../../Styles/PaginaInicioStyle";



export default function PaginaInicio(props) {
    const [busca, setBusca] = useState('');
    const servicos =[
        {
            text:'Buscar serviços',
            image:require('../../assets/Lupa.png'),
            
        },
        {
            text:'Minhas Vacinas',
            image:require('../../assets/vacinas.png'),
            
        },
        {
            text:'Login sem senha(QR code)',
            image:require('../../assets/scaner.png'),
            fontSize:18
            
        },
    ]
    function mapReturn(callback) {
        return callback.filter(post => {
            if (busca === '') {
                return post;
            }
            else if (post.text.toLowerCase().includes(busca.toLowerCase())) {
                return post;
            }
        }).map((value, index) => {
            return (

                <ServiceLink key={index} image={value.image} Text={value.text} navigate={value.navigate} fontSize={value.fontSize}/>
            );
        });
    };

    return (
        <View style={PaginaInicioStyle.keyboardHide.body}>
            <View style={PaginaInicioStyle.keyboardHide.head}>
                <Image style={PaginaInicioStyle.keyboardHide.logo} source={require('../../assets/picwish1.png')} />
                <View style={PaginaInicioStyle.keyboardHide.textHeadContaienr}>
                    <Text style={{ fontSize: 20 }}>{'Olá, '}</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.usuario.perfil.nome}</Text>
                    <Text style={{ fontSize: 17, color: '#514C4C' }}>{`CPF - ${props.usuario.perfil.CPF}`}</Text>
                </View>
                <View style={PaginaInicioStyle.keyboardHide.imagemPerfilContainer}>
                    <Image style={{ width: '100%', height: '100%' }} source={props.usuario.perfil.Image} />
                </View>
            </View>
            <Text>{'\n'}</Text>
            <View style={PaginaInicioStyle.keyboardHide.buscaContainer}>
                <View style={{ width: '25%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 35, height: 35 }} source={require('../../assets/Lupa.png')} />
                </View>
                <TextInput
                    style={{ width: '75%', fontSize: 16 }}
                    placeholderTextColor={'#6F6F6F'}
                    placeholder={'Pesquisar serviços do SMV . . .'}
                    onChangeText={(value)=>setBusca(value)}
                />
            </View>
            <Text>{'\n\n'}</Text>
            <View style={PaginaInicioStyle.keyboardHide.servicosContainer}>
                <View style={{ width: '100%', height: 60, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 22, color: '#6F6F6F', left: '17%' }}>{'Serviços'}</Text>
                    <View style={{ width: '80%', height: 2, backgroundColor: '#6F6F6F', position: 'absolute', top: '90%', left: '10%' }} />
                </View>
                <ScrollView>
                {mapReturn(servicos)}
                </ScrollView>
                <Text>{'\n'}</Text>
            </View>
        </View>
    );
}