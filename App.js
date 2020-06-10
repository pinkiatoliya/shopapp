import React from 'react';
import {View,Text, Platform,} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './store/reducer/ProductReducer';
import CartReducer from './store/reducer/CartReducer';
import ProductOverviewScreen from './screens/shop/ProductOverviewScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from './constants/colors';
import ProductDetailScreen from './screens/shop/ProductDetailScreen';
 import HeaderButton from './UI/HeaderButton';
import CartScreen from './screens/shop/CartScreen';
// import { composeWithDevTools} from 'redux-devtools-extension';
const Stack = createStackNavigator();

const reducers = combineReducers({
  products: productReducer,
  cart: CartReducer
})
// const store = createStore(reducers, composeWithDevTools());
   const store = createStore(reducers);


const App = () => {
  return (
    <Provider store={store}>
       <NavigationContainer>
      <Stack.Navigator
        screenOptions={(props) => ({
          headerStyle: {
          backgroundColor: Platform.OS === 'android' ? colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android'? '#fff' : '',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: ()=>(<HeaderButton {...props} />)
        
       })}>
        <Stack.Screen 
        name="Products" 
        component={ProductOverviewScreen} 
        options={{
          title: 'All Products'
         
        }}/>
     

      <Stack.Screen  
      component={ProductDetailScreen}
      name="ProductDetails"
      options={(props) => ({ title: props.route.params.productTitle      
            
       })}
       />
         <Stack.Screen  
      component={CartScreen}
      name="Cart"
      options={({ route }) => ({ title: 'My Cart'
       })}
       />
       </Stack.Navigator>
    </NavigationContainer>
    </Provider>
     );
};
export default App;
