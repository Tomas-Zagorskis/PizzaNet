export type Pizza = {
	id: number;
	name: string;
	description: string;
	image: string;
	size: PizzaSize;
	toppings: Topping[];
};

type PizzaSizeConst = 'Small' | 'Medium' | 'Large';

export type PizzaSize = {
	id: number;
	pizzaSizeString: PizzaSizeConst;
	pizzaSize: number;
	sizeInCm: number;
	price: number;
};

export type Topping = {
	id: number;
	pizzaToppingString: string;
	pizzaTopping: number;
	amountInGrams: number;
	price: number;
};

export type Order = {
	id: number;
	pizza: Pizza;
	size: PizzaSizeConst;
	toppings: Topping[];
	sizePrice: number;
	toppingsPrice: number;
};
