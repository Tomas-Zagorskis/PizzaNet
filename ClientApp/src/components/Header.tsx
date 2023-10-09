import React from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';

const Header = () => {
	return (
		<header className='z-20 relative'>
			<div className='fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full mx-auto rounded-none border border-gray-300 border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 dark:border-zinc-800'>
				<div className='fixed top-[0.3rem] right-4 z-20'>
					<ModeToggle />
				</div>
			</div>
			<nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
				<ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
					<li className='h-3/4 flex items-center justify-center relative'>
						<Link
							className='flex w-full items-center justify-center p-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 select-none'
							draggable={false}
							to='/'>
							Pizzas
						</Link>
					</li>
					<li className='h-3/4 flex items-center justify-center relative'>
						<Link
							className='flex w-full items-center justify-center p-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 select-none'
							draggable={false}
							to='/orders'>
							Orders
						</Link>
					</li>
					<li className='h-3/4 flex items-center justify-center relative'>
						<Link
							className='flex w-full items-center justify-center p-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 select-none'
							draggable={false}
							to='/cart'>
							Cart
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
