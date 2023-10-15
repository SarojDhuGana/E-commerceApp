import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text,ScrollView,StatusBar,SafeAreaView, StyleSheet,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../src/screen/Home';
import Login from '../../src/screen/Login';
import Signup from '../../src/screen/Signup';
import Notification from '../../src/screen/Notification';
import MyTabs from '../../src/screen/ButtonTabs/Tab';
import { dark,white,green,purple } from '../../src/screen/Constants';

const Stack=createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App(){
  return (
    <NavigationContainer>
         <Stack.Navigator screenOptions={{
          headerTintColor: dark,
          headerBackTitleVisible: false,
          headerTitleAlign:'center',
          headerTitleStyle:{
          color: white,
          fontSize: 30,
          },
          headerStyle:{
            backgroundColor: purple,
            }}}>
         <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
         <Stack.Screen name='Login' component={Login}/>
         <Stack.Screen name='Signup' component={Signup}/>
         

         <Stack.Screen name='Dashboard' component={MyTabs}  options={{headerShown:false}}/>
         <Stack.Screen name='Search' component={MyTabs}/>
         <Stack.Screen name='Setting' component={MyTabs}/>
         <Stack.Screen name='Notification' component={MyTabs}/>
        </Stack.Navigator>
    </NavigationContainer>

  );
        }