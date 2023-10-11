import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartState } from './cartSlice';

export interface OrdersState {
	id: number;
	orders: CartState[];
}

const initialState: OrdersState = {
	id: Math.floor(Math.random() * 1000000),
	orders: [],
};

export const ordersSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		addCart: (state, action: PayloadAction<CartState>) => {
			state.orders.push(action.payload);
		},
		removeCart: (state, action: PayloadAction<CartState>) => {
			state.orders = state.orders.filter(
				order => order.id !== action.payload.id,
			);
		},
	},
});

export const { addCart, removeCart } = ordersSlice.actions;

export default ordersSlice.reducer;
