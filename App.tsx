import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { View, Text, ScrollView, StatusBar, SafeAreaView, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { dark, green, purple, white } from './src/screen/Constants';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import Signup from './src/screen/Signup';
// import Notification from './src/screen/Notification';
// import MyTabs from './src/screen/ButtonTabs/Tab';
import Product from './Context/product';
import Products from './Context/products';
import { ProductsProvider } from './Context/context';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ProductsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='products' component={Products}></Stack.Screen>
          <Stack.Screen name='product' component={Product}></Stack.Screen>
          <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductsProvider>
  );
}



const Styles = StyleSheet.create({

})


//  state management




// react state manage:
// 1. context API
// provider
// valu
// consumer


// 2.Redux/redux'
// 3. zustand
// 4. recoil 

