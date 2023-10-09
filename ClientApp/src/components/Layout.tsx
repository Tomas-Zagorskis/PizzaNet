import { Outlet } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';

const Layout = () => {
	return (
		<>
			<Outlet />
			<div className='absolute top-3 right-3'>
				<ModeToggle />
			</div>
		</>
	);
};
export default Layout;
