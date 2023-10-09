import { Order, Pizza, PizzaSize, Topping } from '@/types/types';
import { useState, useEffect } from 'react';
import PizzaOutlineSvg from './ui/PizzaOutlineSvg';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from './ui/card';
import { Toggle } from './ui/toggle';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';

type PizzaItemProps = {
	pizza: Pizza;
};

const PizzaItem = ({ pizza }: PizzaItemProps) => {
	const [sizes, setSizes] = useState<PizzaSize[] | null>(null);
	const [toppings, setToppings] = useState<Topping[] | null>(null);
	const [sizeId, setSizeId] = useState(1);
	const [order, setOrder] = useState<Order>({
		id: Math.floor(Math.random() * 1000000),
		pizza,
		size: 'Small',
		toppings: [],
		sizePrice: 8,
		toppingsPrice: 0,
	});
	const dispatch = useDispatch();

	useEffect(() => {
		fetch('api/get-sizes')
			.then(result => result.json())
			.then(data => setSizes(data));
		fetch('api/get-toppings')
			.then(result => result.json())
			.then(data => setToppings(data));
	}, []);

	useEffect(() => {
		fetch(`api/get-price-size/${sizeId}`)
			.then(result => result.json())
			.then(data =>
				setOrder(prev => ({
					...prev,
					sizePrice: data.price,
					size: data.pizzaSizeString,
				})),
			);
	}, [sizeId]);

	useEffect(() => {
		fetch(`api/get-price-size/${sizeId}`)
			.then(result => result.json())
			.then(data =>
				setOrder(prev => ({
					...prev,
					sizePrice: data.price,
					size: data.pizzaSizeString,
				})),
			);
	}, [sizeId]);

	const handleClick = () => {
		setOrder(prev => ({ ...prev, id: Math.floor(Math.random() * 1000000) }));
		dispatch(addItem(order));
	};

	return (
		<Card key={pizza.id} className='text-center max-w-xl mx-auto p-8 my-8'>
			<CardHeader className='relative mx-auto w-[300px] p-0 space-y-0 my-6'>
				<PizzaOutlineSvg />
				<img
					src={pizza.image}
					alt={pizza.name}
					className='absolute inset-[50%] translate-x-[-50%] translate-y-[-50%]'
					width={
						order.size === 'Small' ? 260 : order.size === 'Medium' ? 280 : 300
					}
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
								pressed={order.size === size.pizzaSizeString}
								onPressedChange={() => {
									setSizeId(size.id);
								}}>
								{size.pizzaSizeString}
							</Toggle>
						))}
				</div>
			</fieldset>
			<fieldset>
				<legend className='mb-2 text-sm text-zinc-600 font-semibold dark:text-zinc-400'>
					Add pizza toppings (optional):
				</legend>
				<div className='flex items-center justify-center flex-wrap gap-2 my-4'>
					{toppings?.map(topping => (
						<div key={topping.id}>
							<Toggle
								variant='outline'
								size='sm'
								className='dark:border-zinc-600'
								onPressedChange={isSelected => {
									if (isSelected) {
										setOrder(prev => ({
											...prev,
											toppingsPrice: prev.toppingsPrice + topping.price,
											toppings: [...prev.toppings, topping],
										}));
									} else {
										setOrder(prev => ({
											...prev,
											toppingsPrice: prev.toppingsPrice - topping.price,
											toppings: prev.toppings.filter(t => t.id !== topping.id),
										}));
									}
								}}>
								{topping.pizzaToppingString}
							</Toggle>
						</div>
					))}
				</div>
			</fieldset>
			<CardFooter className='flex justify-around mt-5'>
				<div className='text-3xl font-bold font-serif'>
					<input
						type='number'
						className='bg-background w-28 text-right  justify-self-start'
						value={Number(order.sizePrice + order.toppingsPrice).toFixed(2)}
						disabled
					/>
					<span className='justify-self-start'>€</span>
				</div>
				<Button onClick={handleClick}>Add to Cart</Button>
			</CardFooter>
		</Card>
	);
};
export default PizzaItem;
