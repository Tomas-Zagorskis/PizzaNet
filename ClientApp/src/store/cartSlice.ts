import { Order } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
	orders: Order[];
	totalPrice: number;
	discount: number;
}

const initialState: CounterState = {
	orders: [],
	totalPrice: 0,
	discount: 0,
};

export const counterSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<Order>) => {
			state.orders.push(action.payload);
			state.totalPrice +=
				action.payload.sizePrice + action.payload.toppingsPrice;
		},
		removeItem: (state, action: PayloadAction<Order>) => {
			state.orders = state.orders.filter(
				order => order.id !== action.payload.id,
			);
			state.totalPrice -=
				action.payload.sizePrice + action.payload.toppingsPrice;
		},
		clearCart: state => {
			state.orders = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = counterSlice.actions;

export default counterSlice.reducer;
