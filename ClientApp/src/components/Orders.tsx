import { useSelector } from 'react-redux';
import { Card, CardDescription, CardTitle } from './ui/card';
import { RootState } from '@/store/store';

const Orders = () => {
	const orders = useSelector((state: RootState) => state.orders);

	return (
		<Card className='p-4 mt-24 mx-auto max-w-3xl space-y-5'>
			{orders.orders.length === 0 && (
				<CardTitle className='my-10 w-full text-center'>
					Your order list is empty
				</CardTitle>
			)}
			{orders.orders.map(order => (
				<Card
					key={order.id}
					className='flex flex-nowrap items-center justify-between gap-4 p-5'>
					<div className='space-y-3'>
						{order.orders.map(cart => (
							<div>
								<CardTitle>
									{cart.pizza.name}{' '}
									<sup className='text-xs text-primary'>{cart.size}</sup>
								</CardTitle>
								<CardDescription>
									Extra toppings:{' '}
									{cart.toppings.length > 0
										? cart.toppings.map(t => t.pizzaToppingString).join(', ')
										: 'None'}
								</CardDescription>
							</div>
						))}
					</div>
					<div className='flex flex-col flex-nowrap gap-2 min-w-max ml-auto font-serif text-right'>
						<CardTitle>Order Price:</CardTitle>
						<CardTitle>{order.totalPrice.toFixed(2)} €</CardTitle>
					</div>
				</Card>
			))}
		</Card>
	);
};
export default Orders;
