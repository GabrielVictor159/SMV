import React from "react";
import { Image, Text, View } from "react-native";


export default function DadosItens(props){
    return(
        <View style={{width:'95%', height:80, borderBottomWidth:props.border?2:0, flexDirection:'row', borderColor:'#6F6F6F'}}>
            <View style={{width:'20%', height:'100%', justifyContent:'center', alignItems:'center'}}>
            <Image style={{width:'50%', height:'50%'}} resizeMode={'contain'} source={props.image}/>
            </View>
            <View style={{width:'80%', height:'100%',justifyContent:'center'}}>
            <Text style={{fontSize:15, color:'#787777'}}>{props.titulo}</Text>
            <Text style={{fontSize:20, fontWeight:'bold'}}>{props.text}</Text>
            </View>
        </View>
    );
}