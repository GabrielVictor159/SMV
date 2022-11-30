import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MensagemInicial from './Views/PaginasLogin/MensagemInicial';
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import PaginaInicial from './Views/PaginasLogin/PaginaInicial';
import Login from './Views/PaginasLogin/Login';
import Cadastrar from './Views/PaginasLogin/Cadastrar';
import NavigateUsuario from './Views/PaginasUsuario/NavigateUsuario';
const Stack:any = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator
initialRouteName="MensagemInicial"
>
<Stack.Screen
          name="MensagemInicial"
          component={MensagemInicial}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="PaginaInicial"
          component={PaginaInicial}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="NavigateUsuario"
          component={NavigateUsuario}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarShowLabel: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
    </Stack.Navigator>
    </NavigationContainer>
    
      
  );
}
