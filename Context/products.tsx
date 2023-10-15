import { View, ActivityIndicator, Pressable, TouchableOpacity, StatusBar, Text, FlatList, Button, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useProducts } from './context';
import { black, dark, purple, red, white, yellow } from '../src/screen/Constants';
import { ColorSpace, blue } from 'react-native-reanimated';
import { counter } from '@fortawesome/fontawesome-svg-core';
import { Icon } from '@iconify/react';

const Products = ({ navigation }: any) => {
  // function call from context 
  const { products, isLoading, deleteproduct, removeFromCart, addProduct, myProducts } = useProducts();
  //  fuction start for index number set 
  const [myProductsLength, setMyProductsLength] = useState(myProducts.length);
  //----------------------------------- product length show section start 
  console.log({ products, isLoading, myProducts });

  //------------------------ loading show start 
  if (isLoading) {
    return (
      <View style={Styles.felx}>
        <ActivityIndicator size="large" color='purple' />
        <Text style={Styles.isloading}>Please Wait for a while its loading</Text>
      </View>
    );
  }
  // ------------------------loading shown section end 
  return (
    <View>
      <View>
        {/* <Icon icon={cartIcon} color="black" /> */}
        <Text style={Styles.length}>Product count:{myProducts.length}</Text>
      </View>

      <View>
        <Text style={Styles.welcome}>Welcome To</Text>
        <Text style={Styles.shopping}>Online shopping</Text>
      </View>
      {/*//---------------------------- flatlist section start ----------- */}
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return (
            <View style={Styles.box}>
              <View style={Styles.container}>
                <Image
                  resizeMode='contain'
                  source={{ uri: item.image }} />
                <Text>{item.title}</Text>
                <Text>Description:{item.description}</Text>
                <Text>Price:{item.price}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>



  );
};
//---------------------------- flatlist section end
const Styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'lightskyblue',

  },
  welcome: {
    fontSize: 40,
    color: black,
    textAlign: 'center',
    fontFamily: 'arial',
  },
  shopping: {
    fontSize: 40,
    color: black,
    textAlign: 'center',
    fontFamily: 'arial',
  },
  isloading: {
    color: purple,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  felx: {
    marginHorizontal: 10,
    marginVertical: 20,
    marginTop: 80,
    marginBottom: 80,
    borderRadius: 20,
    backgroundColor: 'pink',
    borderBottomWidth: 1,
    borderTopWidth: 1,

  },
  container: {
    flex: 1,
    paddingTop: 10,
    marginTop: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'pink',
    borderBottomWidth: 15,
    borderBottomColor: purple,
    borderRadius: 15,
    borderRightWidth: 4,
    borderRightColor: purple,
  },
  length: {
    zIndex: 1000,
    color: black,
    textAlign: 'right',
    fontSize: 15,
    marginRight: 20,
  },
  item: {
    padding: 20,
    borderRadius: 20,
    borderColor: 'black',
    height: 200,
    width: 200,
    marginVertical: 8,
    marginHorizontal: 30,

  },
  catagory: {
    textAlign: 'center',
    color: purple,
    fontSize: 35,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: blue,
    borderEndEndRadius: 1,
  },
  description: {
    padding: 10,
    marginTop: 10,
    marginHorizontal: 5,
    color: white,
    backgroundColor: black,
    borderRadius: 10,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    color: dark,
    marginHorizontal: 5,
  },
  price: {
    fontSize: 29,
    color: black,
    top: -10,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  carts: {
    // width: '55%',
    fontSize: 20,
    color: 'white',
    marginHorizontal: 5,
    flexDirection: 'row',
    display: 'flex',
    textAlign: 'center',
  }

})

export default Products;