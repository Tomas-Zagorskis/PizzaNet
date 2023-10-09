import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import PizzaList from './components/PizzaList';
import Cart from './components/Cart';
import Orders from './components/Orders';
import Layout from './components/Layout';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route index element={<PizzaList />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/orders' element={<Orders />} />
		</Route>,
	),
);
