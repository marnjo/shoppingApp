import { IProduct } from '../../shared/interfaces';
import * as CartActions from './cart.actions';

export interface State {
    cart: IProduct[];
}

const initialState = {
    cart: [],
}

export function CartReducer(state = initialState, action: CartActions.CartActions) {
    const newCart = state.cart.slice();
    switch(action.type) {
        case CartActions.ADD_TO_CART:
            // if (newCart.find(elem => elem.id === action.payload.product.id)) {
            //     const index = newCart.map(elem => elem['id']).indexOf(action.payload.product.id);
            //     console.log();
            //     console.log(true);
            //     console.log(newCart[index]['amount']);
            //     newCart[index]['amount']++;
            //     console.log(newCart.map(elem => elem['id']).indexOf(action.payload.product.id));
            // } else {
                newCart.push(action.payload.product);
                console.log();
                console.log(false);
                console.log(newCart.find(elem => elem.id === action.payload.product.id));
            // }
            return {
                ...state,
                cart: newCart
            }
        case CartActions.REMOVE_FROM_CART:
            // const newCart = state.cart.slice();
            // if (newCart.find(elem => elem.id === action.payload.product.id)) {
            //     const index = newCart.map(elem => elem['id']).indexOf(action.payload.product.id);
            //     console.log();
            //     console.log(true);
            //     console.log(newCart[index]['amount']);
            //     newCart[index]['amount']++;
            //     console.log(newCart.map(elem => elem['id']).indexOf(action.payload.product.id));
            // } else {
                const index = newCart.map(elem => elem['id']).indexOf(action.payload.product.id);
                newCart.splice(index, 1);
                console.log();
                console.log(false);
                console.log(newCart.find(elem => elem.id === action.payload.product.id));
            // }
            return {
                ...state,
                cart: newCart
            }
        default:
            return {
                ...state
            }
    }
}