import { Pizza, PizzaSize, Topping } from '@/types/types';
import { useState, useEffect } from 'react';
import PizzaOutlineSvg from './ui/PizzaOutlineSvg';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Toggle } from './ui/toggle';

type PizzaItemProps = {
	pizza: Pizza;
};

const PizzaItem = ({ pizza }: PizzaItemProps) => {
	const [sizes, setSizes] = useState<PizzaSize[] | null>(null);
	const [toppings, setToppings] = useState<Topping[] | null>(null);
	const [selectedSize, setSelectedSize] = useState('Small');

	useEffect(() => {
		fetch('api/get-sizes')
			.then(result => result.json())
			.then(data => setSizes(data));
		fetch('api/get-toppings')
			.then(result => result.json())
			.then(data => setToppings(data));
	}, []);

	return (
		<Card key={pizza.id} className='text-center max-w-xl mx-auto p-8 my-8'>
			<form>
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
				<fieldset className='m-5'>
					<legend className='mb-2 text-sm text-zinc-600 font-semibold dark:text-zinc-400'>
						Select pizza size:
					</legend>
					<div className='flex items-center justify-center space-x-2'>
						{sizes
							?.sort((a, b) => a.id - b.id)
							.map(size => (
								<Toggle
									key={size.id}
									variant='outline'
									size='sm'
									className='dark:border-zinc-600'
									pressed={selectedSize === size.pizzaSizeString}
									onPressedChange={() =>
										setSelectedSize(`${size.pizzaSizeString}`)
									}>
									{size.pizzaSizeString}
								</Toggle>
							))}
					</div>
				</fieldset>
				<fieldset>
					<legend className='mb-2 text-sm text-zinc-600 font-semibold dark:text-zinc-400'>
						Select pizza toppings (optional):
					</legend>
					<div className='flex items-center justify-center flex-wrap gap-2 my-4'>
						{toppings?.map(topping => (
							<div key={topping.id}>
								<Toggle
									variant='outline'
									size='sm'
									className='dark:border-zinc-600'>
									{topping.pizzaToppingString}
								</Toggle>
							</div>
						))}
					</div>
				</fieldset>
			</form>
		</Card>
	);
};
export default PizzaItem;
