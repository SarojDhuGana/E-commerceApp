import React from 'react';
import {View, Text, Alert,StyleSheet,StatusBar,ImageBackground, Touchable,ScrollView, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './btn';
import { dark } from './Constants';
import Field from './Field';

const slidebar=()=>{
    return(
<ScrollView>
<ImageBackground source={require("./assets/kali.jpg")} style={{ width: undefined,padding:15,paddingTop:16,}} />
</ScrollView>

    )
}





export default slidebar;