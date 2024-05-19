import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { listProduct } from '../assets/assets'

export interface Products {
    id: number
    name: string
    image: string
    price: number
    description: string
    category: string
}

const productsSlice = createSlice({
    name: 'products',
    initialState: listProduct as Products[],
    reducers: {
        addProduct: (state, action: PayloadAction<Products>) => {
            state.push(action.payload);
        },
    },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
