import { useEffect, useState } from 'react';
import './App.css';
import { Pizza, PizzaSize, Topping } from './types/types';
import PizzaOutlineSvg from './components/ui/PizzaOutlineSvg';
import { ThemeProvider } from './components/theme-provider';
import { ModeToggle } from './components/mode-toggle';

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
					<PizzaOutlineSvg />
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
		<ThemeProvider defaultTheme='dark' storageKey='pizza-ui-theme'>
			<div className='card'>{pizzasMap}</div>
			<div className='absolute top-3 right-3'>
				<ModeToggle />
			</div>
		</ThemeProvider>
	);
}

export default App;
