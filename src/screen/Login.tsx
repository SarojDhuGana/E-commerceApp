import React from 'react';
import { View, Text, Touchable, TouchableOpacity, Alert } from 'react-native';
import Background from './Background';
import Btn from './btn';
import { dark } from './Constants';
import Field from './Field';
import Home from './Dashboard';

const Login = ({navigation}: any) => {
  return (
    <Background>
      <View style={{ alignItems: 'center', width: '100%', height:'100%'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 42,
            fontWeight: 'bold',
            textAlign: 'left',
            // marginVertical: 10,
            // marginHorizontal: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 300,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 40, color: dark, fontWeight: 'bold' }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
            
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200 }}>
            <Text style={{ color: dark, fontWeight: 'bold', fontSize: 16 }}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' 
          bgColor={dark} 
          Label="Login" 
           Press={() => navigation.navigate("products")}/>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={{ color: dark, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;