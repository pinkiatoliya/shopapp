import React from 'react';
import { Text, Icon} from "native-base";
import { TouchableOpacity } from 'react-native-gesture-handler';
const HeaderButton = (props)=>{
    // console.log(props, 'go to cart');
    return(
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>{props.navigation.navigate('Cart')}}>
            <Icon type="FontAwesome" name="shopping-cart" style={{fontSize: 20, color: 'white', marginRight: 10}}  />
            <Text style={{color: 'white'}}>Cart</Text>
        </TouchableOpacity>
        );
}

export default HeaderButton;