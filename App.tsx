import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MensagemInicial from './Views/MensagemInicial';
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import PaginaInicial from './Views/PaginaInicial';
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
    </Stack.Navigator>
    </NavigationContainer>
    
      
  );
}
