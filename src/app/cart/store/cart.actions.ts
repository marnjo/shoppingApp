import { Action } from "@ngrx/store";
import { IProduct } from "src/app/shared/interfaces";

export const ADD_TO_CART = '[Cart] Add To Cart';
export const REMOVE_FROM_CART = '[Cart] Add From Cart';
export const CLEAR_CART = '[Cart] Add From Cart';

export class AddToCart implements Action {
    readonly type = ADD_TO_CART;

    constructor(public payload: {product: IProduct}) {}
}

export class RemoveFromCart implements Action {
    readonly type = REMOVE_FROM_CART;

    constructor(public payload: {product: IProduct}) {}
}

export class ClearCart implements Action {
    readonly type = CLEAR_CART;

    constructor(public payload: any) {}
}

export type CartActions = AddToCart | RemoveFromCart | ClearCart;