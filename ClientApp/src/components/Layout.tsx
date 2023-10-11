import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Toaster } from 'sonner';

const Layout = () => {
	return (
		<>
			<Toaster richColors position='top-center' />
			<Header />
			<Outlet />
		</>
	);
};
export default Layout;
