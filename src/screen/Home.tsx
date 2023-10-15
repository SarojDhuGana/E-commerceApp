import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './btn';
import { dark,green } from './Constants';
import Field from './Field';

const Home = (props:any) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 30, marginVertical: 30 }}/>
      <Text style={{ color: '#Fb9902', fontSize: 70, }}>Let's fun</Text>
      <Text style={{ color: 'white' , fontSize: 64, marginBottom: 40, }}>welcom to all</Text>
      <Btn bgColor='#Fb9902' Color= {green} Label="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' Color='black' Label="Signup" Press={() => props.navigation.navigate("Signup")} />
    </Background> 
)};

const styles = StyleSheet.create({  

darkGreen:{
  color: '#006A42'
},

 green:{
  color:'#2BB789'
},

})

export default Home;