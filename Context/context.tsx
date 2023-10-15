import { createContext, useEffect, useContext, useReducer, useState } from 'react';
import { State } from 'react-native-gesture-handler';
import Product from './product';
import { Icon } from '@iconify/react';
import cartIcon from '@iconify/icons-ion/cart';
// async 

const ProductsContext = createContext<any>(null);
// state start 
const initialState = {
  products: [],
  isLoading: false,
  myProducts: [],
};

const [products, setProducts] = useState<any>(initialState);
// state stop
// Function reducer start 
function reducer(state: any, action: any) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true };

    case 'products/loaded':
      console.log('products loaded');
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case 'products/add':
      console.log('product  add', action.payload, state);
      return {
        ...state,
        myProducts: [...state.myProducts, action.payload],
      };
    case 'removeFromCart': {
      console.log('myProducts ==', state);
      console.log('removeFromcart ==', action.payload);
      return {
        ...state,
        myProducts: state.myProducts.filter((product: any) => {
          return products !== action.payload;

        }),
      };
    };
    default:
      throw new Error('Unknown action type');
  }
}
// function reducer close
// ---------------------------provider section start
function ProductsProvider({ children }: any) {
  const [{ products, isLoading, myProducts }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  // provider section close

  //-------------------- Api call section start and suscribing section
  useEffect(function () {
    async function fetchProducts() {
      dispatch({ type: 'loading' });

      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        dispatch({ type: 'products/loaded', payload: data });
      } catch {
        dispatch({
          type: 'rejected',
          payload: 'There was an error loading cities...',
        });
      }
    }
    fetchProducts();
  }, []);
  //------------------------------------- api call section close 

  // for adding product function start 
  const addProduct = ({ product }: any) => {
    console.log('product', product);
    dispatch({ type: 'products/add', payload: product });
  };
  const removeFromCart = (product: any) => {
    console.log('product', product);
    dispatch({ type: 'removeFromCart', payload: product});
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        addProduct,
        removeFromCart,
        myProducts,
      }}>
      {children}
    </ProductsContext.Provider>
  );
}
function useProducts() {
  const context: any = useContext(ProductsContext);
  if (context === undefined)
    throw new Error('CitiesContext was used outside the CitiesProvider');
  return context;
}

// error function close 

export { ProductsProvider, useProducts };