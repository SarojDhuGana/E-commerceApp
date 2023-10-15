import React from 'react';
import {Alert, TextInput} from 'react-native';
import {dark} from './Constants';
const Field = (props:any) => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 60,fontSize:20, color: 'black', paddingHorizontal: 10, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
      placeholderTextColor='black'>
      </TextInput>
  );
};

export default Field;