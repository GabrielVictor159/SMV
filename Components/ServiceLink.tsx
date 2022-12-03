import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ServiceLink(props){
    const navigation:any = useNavigation();
    return(
   
        <>
        <TouchableOpacity style={{width:'100%', height:60, flexDirection:'row', alignItems:'center'}}
        onPress={()=>props.navigate!==undefined ?navigation.navigate(props.navigate):<></>}
        >
                <View style={{width:'80%', height:'100%', borderBottomWidth:2, borderColor:'#6F6F6F', flexDirection:'row', alignItems:'center', position:'absolute', left:'10%'}}> 
                <Image style={{width:30, height:30}} resizeMode={'stretch'} source={props.image}/>
                <Text style={{fontSize:props.fontSize===undefined?22:props.fontSize, color:'#135993', left:'25%'}}>{props.Text}</Text>
                <Image style={{width:16, height:18, position:'absolute', top:'50%', left:'95%'}} resizeMode={'stretch'} source={require('../assets/_.png')}/>
                </View>                
            </TouchableOpacity>
           
            </>
    );
}