import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardDescription, CardFooter, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { BsFillTrashFill } from 'react-icons/bs';
import { clearCart, removeItem } from '@/store/cartSlice';

const Cart = () => {
	const cart = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();

	return (
		<Card className='p-4 mt-24 mx-auto max-w-3xl space-y-5'>
			{cart.orders.length === 0 && (
				<CardTitle className='my-10 w-full text-center'>
					Your cart is empty
				</CardTitle>
			)}
			{cart.orders.map(order => (
				<div key={order.id} className='flex flex-nowrap items-center gap-4'>
					<img
						src={order.pizza.image}
						width={100}
						height={100}
						className='rounded-lg'
					/>
					<div className='space-y-1'>
						<CardTitle>{order.pizza.name}</CardTitle>
						<CardDescription>{order.pizza.description}</CardDescription>
						<CardDescription>
							Extra toppings:{' '}
							{order.toppings.length > 0
								? order.toppings.map(t => t.pizzaToppingString).join(', ')
								: 'None'}
						</CardDescription>
					</div>
					<div className='flex flex-nowrap gap-2 min-w-max ml-auto font-serif align-baseline'>
						<CardTitle>
							{(order.sizePrice + order.toppingsPrice).toFixed(2)} €
						</CardTitle>
						<Button
							variant='destructive'
							size='sm'
							onClick={() => dispatch(removeItem(order))}>
							<BsFillTrashFill />
						</Button>
					</div>
				</div>
			))}
			{cart.totalPrice != 0 ? (
				<CardFooter className='flex flex-nowrap justify-between pt-12'>
					<CardTitle>Total: {cart.totalPrice.toFixed(2)} €</CardTitle>
					<Button variant='default'>Checkout</Button>
					<Button variant='secondary'>Continue shopping</Button>
					<Button variant='destructive' onClick={() => dispatch(clearCart())}>
						Clear Order
					</Button>
				</CardFooter>
			) : null}
		</Card>
	);
};
export default Cart;
