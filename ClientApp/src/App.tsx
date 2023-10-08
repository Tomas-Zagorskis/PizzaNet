import { useEffect, useState } from 'react';
import './App.css';
import { Pizza, PizzaSize, Topping } from './types/types';

function App() {
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
			<div key={pizza.id}>
				<div className='pizza-img'>
					<svg
						className='pizzas-outline'
						width='300'
						height='300'
						viewBox='0 0 260 260'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<circle
							cx='130'
							cy='130'
							r='119.5'
							stroke='#7F8CA3'
							strokeDasharray='1 3 1 3'></circle>
						<circle
							cx='130'
							cy='130'
							r='129.5'
							stroke='#7F8CA3'
							strokeDasharray='3 6 3 6'></circle>
					</svg>
					<img src={pizza.image} alt={pizza.name} width={260} height={260} />
				</div>
				<h2>{pizza.name}</h2>
				<p>{pizza.description}</p>
				<div className='card'>
					{sizes?.map(size => (
						<div key={size.id}>{size.pizzaSizeString}</div>
					))}
				</div>
				<div className='card'>
					{toppings?.map(topping => (
						<div key={topping.id}>{topping.pizzaToppingString}</div>
					))}
				</div>
			</div>
		);
	});
	return (
		<>
			<div className='card'>{pizzasMap}</div>
		</>
	);
}

export default App;
