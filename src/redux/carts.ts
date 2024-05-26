import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ItemCart {
    productID: number
    quantity: number
    image: string
    name: string
    price: number
}

export type PayloadItemCart = {
    productID: number;
    quantity: number;
    itemCart: ItemCart;
    typeUpdateCart: string;
}

export const TYPE_UPDATE_ITEM_CART = {
    MINUS: 'minus',
    ADD: 'add'
}

const cartsSlice = createSlice({
    name: 'carts',
    initialState: [] as ItemCart[],
    reducers: {
        updateItemCart: (state, action: PayloadAction<PayloadItemCart>) => {
            const productID = action.payload.productID;
            const typeAction = action.payload.typeUpdateCart;
            const idxItemUpdate = state.findIndex(itemCart => itemCart.productID === productID);

            if(idxItemUpdate < 0) {
                state.unshift(action.payload.itemCart);
                return state;
            }
 
            if(typeAction === TYPE_UPDATE_ITEM_CART.ADD) {
                const quantityUpdate = state[idxItemUpdate].quantity + 1;

                state[idxItemUpdate] = {
                    ...state[idxItemUpdate],
                    quantity: quantityUpdate
                }
            } else {
                const isMinusToEmpty = state[idxItemUpdate].quantity - 1;
                if(isMinusToEmpty === 0) {
                    const removeItemCart = state.splice(idxItemUpdate, 1);
                    console.log({removeItemCart});
                } else {
                    state[idxItemUpdate] = {
                        ...state[idxItemUpdate],
                        quantity: isMinusToEmpty
                    }
                }
            }

            return state;
        },

        removeItemCart: (state, action: PayloadAction<{ productID: number }>) => {
            const productID = action.payload.productID;
            const idxItemRemove = state.findIndex(itemCart => itemCart.productID === productID);

            if(idxItemRemove < 0) {
                return state;
            }

            state.splice(idxItemRemove, 1);

            return state;
        },
    },
});

export const { updateItemCart, removeItemCart } = cartsSlice.actions;
export default cartsSlice.reducer;
