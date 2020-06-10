import React, { Component } from 'react';
import {View, Image} from 'react-native';
import {Card, CardItem, Text, H3, Button, Icon, Left, Body, Right } from 'native-base';
import COLORS from '../../constants/colors';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import * as cartAction from '../../store/actions/CartAction';
import { color } from 'react-native-reanimated';
import HeaderButton from '../../UI/HeaderButton';

const ProductDetailScreen =(props)=> {
    const dispach = useDispatch();
    let {itemID} = props.route.params;
    // console.log(itemID);
    let selectedProduct = useSelector(state=> state.products.availableProducts).find(item=> item.id === itemID);
    // console.log(selectedProduct);
    return(
      <View>
        <ScrollView>
        {!!selectedProduct ? 
         <Card >
            <CardItem>        
              <Image
                        source={{ uri: selectedProduct.imageUrl }}
                        style={{height: 350, width: null, flex: 1}}
                        />
            </CardItem>
            <CardItem>
               <Left style={{flexDirection: 'column'}}>
                  <Text style={{fontFamily: 'open-sans-bold'}}>{selectedProduct.description}</Text>
                  <Text  style={{fontFamily: 'open-sans'}}>${selectedProduct.price}</Text>
               </Left>
            </CardItem>
            <CardItem style={{width: '100%', flexDirection: 'column'}}>
              <Button style={{backgroundColor: COLORS.primary}} onPress={
                ()=>{dispach(cartAction.addToCart(selectedProduct))}
              }>                  
                  <Text >
                    Add To Cart
                    
                    </Text>
              </Button>
            </CardItem>
          </Card>
        : null}
        </ScrollView>
   
      </View>
         );
}


export default ProductDetailScreen;