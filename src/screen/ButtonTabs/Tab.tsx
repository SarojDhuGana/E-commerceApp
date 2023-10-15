import React from 'react';
import {View, Text, Alert,StyleSheet,StatusBar, Touchable,ScrollView, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Dashboard';
import { dark,green,purple } from '../Constants';
import Home from '../Home';
import Login from '../Login';
import Setting from '../Setting';
import Search from '../Search';
import Notification from '../Notification';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import search from '../Search';
import Background from '../Background';
import MyDrawer from '../Drawn/Drawer';
import slidebar from '../sliderbar';

// import { View,Text } from 'react-native-reanimated/lib/typescript/Animated';
// import { TextInputAdapter } from 'react-native-reanimated';

const Tab=createBottomTabNavigator();

function MyTabs(props:any) {
    return (
      <Tab.Navigator 
      screenOptions={{
     headerShown:false,
     tabBarShowLabel: false,
     tabBarStyle:{
      top: 20,
      left: 20,
      right: 20,
      padding: 20,
      bottom: 20,
      elevation: 0,
      
     }
      }}>
        <Tab.Screen name="Dashboard" component={MyDrawer} />
        <Tab.Screen name="search" component={search} />
        <Tab.Screen name="setting" component={Setting} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="slidebar" component={slidebar} />
      </Tab.Navigator>
    );
  }

  export default MyTabs;