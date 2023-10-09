import PizzaList from './components/PizzaList';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';

function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='pizza-ui-theme'>
			<PizzaList />
			<div className='absolute top-3 right-3'>
				<ModeToggle />
			</div>
		</ThemeProvider>
	);
}

export default App;
