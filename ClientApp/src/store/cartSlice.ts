import { Order } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
	id: number;
	orders: Order[];
	totalPrice: number;
}

const initialState: CartState = {
	id: Math.floor(Math.random() * 1000000),
	orders: [],
	totalPrice: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<Order>) => {
			state.orders.push(action.payload);
			state.totalPrice += action.payload.totalPrice;
		},
		removeItem: (state, action: PayloadAction<Order>) => {
			state.orders = state.orders.filter(
				order => order.id !== action.payload.id,
			);
			state.totalPrice -= action.payload.totalPrice;
		},
		clearCart: state => {
			state.orders = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
