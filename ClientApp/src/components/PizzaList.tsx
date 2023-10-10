import { Pizza, PizzaSize } from '@/types/types';
import { useEffect, useState } from 'react';
import PizzaItem from './PizzaItem';

const PizzaList = () => {
	const [pizzas, setPizzas] = useState<Pizza[] | null>(null);
	const [sizes, setSizes] = useState<PizzaSize[] | null>(null);

	useEffect(() => {
		fetch('api/get-pizzas')
			.then(result => result.json())
			.then(data => setPizzas(data));
		fetch('api/get-sizes')
			.then(result => result.json())
			.then(data => setSizes(data));
	}, []);

	const pizzasMap =
		pizzas &&
		pizzas.map((pizza: Pizza) => {
			if (sizes) {
				return <PizzaItem pizza={pizza} sizes={sizes} key={pizza.id} />;
			}
		});
	return <div className='p-4 mt-12'>{pizzasMap}</div>;
};
export default PizzaList;
