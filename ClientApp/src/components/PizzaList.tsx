import { Pizza } from '@/types/types';
import { useEffect, useState } from 'react';
import PizzaItem from './PizzaItem';

const PizzaList = () => {
	const [pizzas, setPizzas] = useState<Pizza[] | null>(null);

	useEffect(() => {
		fetch('api/get-pizzas')
			.then(result => result.json())
			.then(data => setPizzas(data));
	}, []);

	const pizzasMap = pizzas?.map((pizza: Pizza) => <PizzaItem pizza={pizza} />);
	return <div className='p-4'>{pizzasMap}</div>;
};
export default PizzaList;
