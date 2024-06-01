import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import Movie from './pages/movie/Movie';
import Bookmark from './pages/bookmark/Bookmark';
import TvSeries from './pages/tv-series/TvSeries';

export const router = createBrowserRouter([
	{
		path: '/movie-app/',
		element: <Home />,
		errorElement: <Error />,
	},
	{
		path: '/movie-app/movie',
		element: <Movie />,
		errorElement: <Error />,
	},
	{
		path: '/movie-app/bookmark',
		element: <Bookmark />,
		errorElement: <Error />,
	},
	{
		path: '/movie-app/tv-series',
		element: <TvSeries />,
		errorElement: <Error />,
	},
]);
