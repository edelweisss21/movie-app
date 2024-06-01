import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './reset.min.css';
import { MovieProvider } from './context/movie-context';

const App = () => {
	return (
		<MovieProvider>
			<RouterProvider router={router} />;
		</MovieProvider>
	);
};

export default App;
