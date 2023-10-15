import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from '../ButtonTabs/Tab';
import search from '../Search';
import DashBoard from '../Dashboard';
import Setting from '../Setting';
import Notification from '../Notification';
import slidebar from '../sliderbar';


const Drawer = createDrawerNavigator();

const screen =()=>{
  return(
    <View></View>
  )
}

const  MyDrawer=()=> {
  return (
   < Drawer.Navigator screenOptions={{}}>
   <Drawer.Screen name='DashBoard' component={DashBoard} options={{
    headerShown:true
  }}/>
   <Drawer.Screen name='Search' component={search}             />
   <Drawer.Screen name='Setting' component={Setting}/>
   <Drawer.Screen name='Notification' component={Notification}/>
   <Drawer.Screen name='sliderbar' component={slidebar}/>
   
   </Drawer.Navigator>

 )
}
export default MyDrawer;