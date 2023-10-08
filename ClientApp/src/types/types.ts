export type Pizza = {
	id: number;
	name: string;
	description: string;
	image: string;
};

type PizzaSizeConst = 'Small' | 'Medium' | 'Large';

export type PizzaSize = {
	id: number;
	pizzaSizeString: PizzaSizeConst;
	pizzaSize: number;
	sizeInCm: number;
};

export type Topping = {
	id: number;
	pizzaToppingString: string;
	pizzaTopping: number;
	amountInGrams: number;
};
