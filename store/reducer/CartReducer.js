import {ADD_TO_CART} from '../actions/CartAction';
import CartItem from '../../models/cart-item';
const initialState = {
    items: {},
    totalAmount: 0
}

export default (state = initialState, action)=>{
    // console.log('cart reducer action', action, ADD_TO_CART);

    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title;
            if(state.items[addedProduct.id]){
              //we already have product
              const updateExistingItems = new CartItem(
                state.items[addedProduct.id].quantity+1, 
                productPrice, 
                productTitle,
                state.items[addedProduct.id].sum+productPrice
              );
            // state.totalAmount = state.totalAmount+ productPrice; 
            return {
                   ...state, 
                   items: {...state.items, [addedProduct.id]: updateExistingItems},
                   totalAmount: state.totalAmount+ productPrice

               }
            }else{
                const newCartItem = new CartItem(1, productPrice,productTitle, 
                productPrice);
                           
                return {
                   ...state, 
                   items: {...state.items, [addedProduct.id]: newCartItem},
                   totalAmount: state.totalAmount+ productPrice
               }

            }
            break;
        default:
            return state;
            break;
    }
    
}