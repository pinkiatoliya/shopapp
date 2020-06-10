import React, { Component } from 'react';
import { FlatList, View, Image, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import COLORS from '../../constants/colors';
import { useSelector, useDispatch } from 'react-redux';
import * as cartAction from '../../store/actions/CartAction';

const ProductOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispach = useDispatch();
    let TouchableTemp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.version >= 21){
        TouchableTemp = TouchableNativeFeedback;
    }
    // console.log(products);
    return (
       
        <FlatList 
        data={products} 
        keyExtractor={item => item.id} 
        renderItem={({ item }) => (
             <TouchableTemp onPress={()=>{props.navigation.navigate('ProductDetails', {itemID: item.id, productTitle: item.title})}}>
            <View style={{marginHorizontal: 10}}>           
            <Card>               
                <CardItem cardBody>                   
                    <Image
                        source={{ uri: item.imageUrl }}
                        style={{height: 200, width: null, flex: 1}}
                        />
                </CardItem>
               
                <CardItem>
                    <Left style={{flexDirection: 'column'}}>                         
                        <Text >{item.title}</Text>
                        <Text>{item.price}</Text>
                    </Left>
                </CardItem>
                <CardItem>
                <Left>
                        <Button style={{backgroundColor: COLORS.primary}} onPress={()=>{props.navigation.navigate('ProductDetails', {itemID: item.id, productTitle: item.title})}}>
                           <Text>Details</Text>
                        </Button>
                    </Left>

                    <Right>
                        <Button style={{backgroundColor: COLORS.primary}} onPress={()=>{
                            dispach(cartAction.addToCart(item))
                            }}>
                           <Text>Add To Cart</Text>

                        </Button>
                    </Right>
                </CardItem>
            </Card>            
            </View>
            </TouchableTemp>
        )} />
    );
}

export default ProductOverviewScreen;