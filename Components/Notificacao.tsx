import React from "react";
import { Text, View } from "react-native";
import DataConvert from "../Config/DataConvert";

export default function Notificacao(props) {
    return (
        <>
        <View style={{ width: '100%',overflow:'visible', minWidth:'90%', minHeight: 30, backgroundColor: 'white', borderRadius:15, elevation: 12, borderWidth: 1, alignItems: 'center', borderColor: '#B8B8B8' }}>
        <View style={{ width: 10, height: 10, borderRadius: 30, elevation: 15, backgroundColor: '#006CEA', display:props.vizualizado===false ? 'flex':'none' ,shadowColor: '#006CEA', position:'absolute',left:'5%',top:30}} />
            <View style={{width: '80%', top:20}}>
            <Text style={{ width: '100%', fontSize: 18 }}>{props.text}</Text>
            <Text style={{ width: '100%', fontSize: 12, color: '#444444' }}>{props.data.substring(0,2) +" " +DataConvert(props.data.substring(3,5)) + " "+props.data.substring(6,10)}</Text>
            <Text>{'\n'}</Text>
            </View>
        </View>
        <Text>{'\n'}</Text>
        </>
    );
}