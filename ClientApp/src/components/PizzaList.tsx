import { Pizza, PizzaSize } from '@/types/types';
import { useEffect, useState } from 'react';
import PizzaItem from './PizzaItem';
import { Loader2 } from 'lucide-react';

const PizzaList = () => {
	const [pizzas, setPizzas] = useState<Pizza[] | null>(null);
	const [sizes, setSizes] = useState<PizzaSize[] | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('api/get-pizzas')
			.then(result => result.json())
			.then(data => {
				setPizzas(data);
				setIsLoading(false);
			})
			.catch(err => {
				setIsLoading(false);
				console.log(err);
			});
		fetch('api/get-sizes')
			.then(result => result.json())
			.then(data => setSizes(data));
	}, []);

	if (isLoading)
		return (
			<div className='absolute right-[50%] top-36'>
				<Loader2 className='text-gray-500 w-20 h-20 animate-spin ' />
			</div>
		);

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
