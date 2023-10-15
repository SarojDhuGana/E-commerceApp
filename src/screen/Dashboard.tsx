import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Alert, TextInput,ImageBackground} from 'react-native';
import {dark} from './Constants';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { Image } from 'react-native-svg';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
const DashBoard= (props:any) => {
  return (
    <View>
      {/* icon({name: 'user', style: 'solid'}) */}
    <ImageBackground source={require("./assets/kali.jpg")}
    
     style={{ margin: 32,
     height: '60%', 
     width:'60%'
     
     }} />
   <Text style={{margin: 32,fontSize:20,textAlign:'center'}}>Dashboard</Text>

   </View>
  );
};

export default DashBoard;