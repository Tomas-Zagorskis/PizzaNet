import { useState, useEffect } from 'react';
import { Pizza, PizzaSize, Topping } from '@/types/types';
import PizzaOutlineSvg from './ui/PizzaOutlineSvg';
import { Toggle } from './ui/toggle';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const PizzaList = () => {
	const [pizzas, setPizzas] = useState<Pizza[] | null>(null);
	const [sizes, setSizes] = useState<PizzaSize[] | null>(null);
	const [toppings, setToppings] = useState<Topping[] | null>(null);
	useEffect(() => {
		fetch('api/get-pizzas')
			.then(result => result.json())
			.then(data => setPizzas(data));
		fetch('api/get-sizes')
			.then(result => result.json())
			.then(data => setSizes(data));
		fetch('api/get-toppings')
			.then(result => result.json())
			.then(data => setToppings(data));
	}, []);

	const pizzasMap = pizzas?.map((pizza: Pizza) => {
		return (
			<Card key={pizza.id} className='text-center max-w-xl mx-auto p-8 my-8'>
				<CardHeader className='relative mx-auto w-[300px] p-0 space-y-0 my-6'>
					<PizzaOutlineSvg />
					<img
						src={pizza.image}
						alt={pizza.name}
						className='absolute inset-[50%] translate-x-[-50%] translate-y-[-50%]'
						width={260}
						height={260}
					/>
				</CardHeader>
				<CardTitle className='mb-4'>{pizza.name}</CardTitle>
				<CardDescription>{pizza.description}</CardDescription>
				<div>
					{sizes?.map(size => (
						<Toggle onClick={} variant='outline' className='' key={size.id}>
							{size.pizzaSizeString}
						</Toggle>
					))}
				</div>
				<div className='flex items-center justify-center flex-wrap gap-2 my-4'>
					{toppings?.map(topping => (
						<div>
							<Toggle
								variant='outline'
								size='sm'
								className='dark:border-zinc-600'>
								{topping.pizzaToppingString}
							</Toggle>
						</div>
					))}
				</div>
			</Card>
		);
	});
	return <div className='p-4'>{pizzasMap}</div>;
};
export default PizzaList;
