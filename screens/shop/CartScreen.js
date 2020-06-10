import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { Button, Left, Right, Card, CardItem, H3 } from 'native-base';
import {useSelector} from 'react-redux';
import colors from '../../constants/colors';
const CartScreen =(props)=>{
  let selectedProduct = useSelector(state=> state.cart.items);
  console.log(selectedProduct, 'selected cart items');
  const transformedCartItems = [];
  for (const key in selectedProduct) {
      transformedCartItems.push({
        productId: key,
        productTitle: selectedProduct[key].productTitle,
        productQty: selectedProduct[key].quantity,
        productPrice: selectedProduct[key].productPrice,
        sum: selectedProduct[key].sum
     });
  }

  console.log(transformedCartItems);

    return (
      <View>
        <View>
          <Card>
            <CardItem>
            <Left>
              <Text>Total: $19.90</Text>
            </Left>
            <Right>
              <Button color={colors.accent}><Text>Order Now</Text></Button>
            </Right>
            </CardItem>
          </Card>
        </View>
        <View>
          <Text>Cart Items</Text>
          <FlatList renderItem={({item})=>(
            <Text>dd</Text>
          )} />
        </View>
      </View>
    );
}

export default CartScreen;