import React,{useState} from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PaginaInicio from "./PaginaInicio";
import { Image, Text, View } from "react-native";
import PaginaDados from "./PaginaDados";
import PaginaNotificacao from "./PaginaNotificacao";
import UsuarioController from "../../Controller/UsuarioController";
const Tab = createMaterialTopTabNavigator();

export default function NavigateUsuario(){
    const [swipeEnabled, setSwipeEnabled] = useState(true);
     const [display, setDisplay] = useState("flex");
     const [usuario, setUsuario] = useState(new UsuarioController().usuario)
    return(
        <>
        <NavigationContainer independent={true}>
            <Tab.Navigator
            initialRouteName="PaginaInicio"
            tabBarPosition="bottom"
            screenOptions={{
                swipeEnabled:swipeEnabled,
                tabBarIndicatorStyle:{
                    height:0,
                },
                
                tabBarStyle:{height:80, display:display, borderTopWidth:2, borderColor:'#B8B8B8'},
                tabBarIconStyle:{alignItems:'center'},
                tabBarActiveTintColor:'#e91e63',
                
                
            }}
            >
            
            <Tab.Screen 
            name = "PaginaDados"
            children={()=><PaginaDados usuario={usuario} setUsuario={setUsuario} swipe={setSwipeEnabled} navDisplay={setDisplay}/>}
            
            options={{
                
                tabBarLabel:({focused})=>{
                    return <Text style={{fontSize:14, top:12, color:focused===true?"#277BC0":"black"}}>{'Dados'}</Text>
                  },
                headerShown:false,
                tabBarIcon: ({focused})=>(
                    
                        <View >
                                 <Image style={{width:28,height:26, tintColor:focused?"#277BC0":"black"}} source={require('../../assets/Dados_Icon_Active.png')}/>
                        </View>
                        
                ),
                
             }
             }
            />
            <Tab.Screen 
            name = "PaginaInicio"
            children={()=><PaginaInicio usuario={usuario} setUsuario={setUsuario} swipe={setSwipeEnabled} navDisplay={setDisplay}/>}
            options={{
                
                tabBarLabel:({focused})=>{
                    return <Text style={{fontSize:14, top:12, color:focused===true?"#277BC0":"black"}}>{'Inicio'}</Text>
                  },
                headerShown:false,
                tabBarIcon: ({focused})=>(
                    
                        focused===true?
                        <Image style={{width:28,height:26}} source={require('../../assets/Inicio_Icon_Active.png')}/>
                        :<Image style={{width:28,height:26}} source={require('../../assets/Inicio_Icon_Inactive.png')}/>
                    
                ),
                
             }
             }
            />
            <Tab.Screen 
            name = "PaginaNotificacao"
            children={()=><PaginaNotificacao usuario={usuario} setUsuario={setUsuario} swipe={setSwipeEnabled} navDisplay={setDisplay}/>}
            options={{
                
                tabBarLabel:({focused})=>{
                    return <Text style={{fontSize:14, top:12, color:focused===true?"#277BC0":"black"}}>{'Notificação'}</Text>
                  },
                headerShown:false,
                tabBarIcon: ({focused})=>(
                    
                        focused===true?
                        <Image style={{width:26,height:29}} source={require('../../assets/Notificacao_Icon_Active.png')}/>
                        :<Image style={{width:26,height:29}} source={require('../../assets/Notificacao_Icon_Inactive.png')}/>
                    
                ),
                
             }
             }
            />
            </Tab.Navigator>
        </NavigationContainer>
        </>
    );
}