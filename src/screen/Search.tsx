import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Alert, TextInput,ImageBackground} from 'react-native';
import {dark} from './Constants';
// import { Image } from 'react-native-svg';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
const search = (props:any) => {
  return (
    <View>
    <ImageBackground source={require("./assets/leaves.jpg")}
     style={{ margin: 32,
     height: '60%', 
     width:'60%'
     
     }} />
   <Text style={{margin: 32,fontSize:20,textAlign:'center'}}>Search</Text>

   </View>
  );
};

export default search;