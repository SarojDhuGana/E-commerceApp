import React from 'react';
import {View, Text, Alert,StyleSheet,StatusBar, Touchable,ScrollView, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './btn';
import { dark } from './Constants';
import Field from './Field';
import { isNewBackTitleImplementation } from 'react-native-screens';

const Signup = (props:any) => {
  return (

    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: '#333',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Contact Number" keyboardType={'number'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            <Text style={{color: 'orange', fontSize: 16}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 16}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'white', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: dark , fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor='black'
            Label="Signup"
            Title="if null ? Please fill the form"
            Press={() => {
              if(props && null){
              Alert.alert("Fill your Information")}
              else{
                Alert.alert("Account create successfull")
                props.navigation.navigate("Login")
              }
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold',color:'white'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color:'white', fontWeight: 'bold', fontSize: 16,}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  </Background>

  );
};
 const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },

 })
export default Signup;