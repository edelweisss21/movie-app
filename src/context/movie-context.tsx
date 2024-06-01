import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { IMovies, moviesData } from '../assets/data';

type MovieContextProps = {
	children: ReactNode;
};

type MovieState = {
	movies: IMovies[];
};

type MovieAction = {
	type: string;
	id: string;
};

const MovieList: IMovies[] = moviesData;

const initialMovieState: MovieState = {
	movies: MovieList,
};

const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
	switch (action.type) {
		case 'TOGGLE BOOKMARK':
			return {
				...state,
				movies: state.movies.map((movie) => {
					if (movie.id === action.id) {
						return { ...movie, isBookmarked: !movie.isBookmarked };
					}
					return movie;
				}),
			};
		default:
			return state;
	}
};

export const MovieContext = createContext<{
	state: MovieState;
	dispatch: Dispatch<MovieAction>;
}>({
	state: initialMovieState,
	dispatch: () => {},
});

export const MovieProvider = ({ children }: MovieContextProps) => {
	const [state, dispatch] = useReducer(MovieReducer, initialMovieState);
	return (
		<MovieContext.Provider value={{ state, dispatch }}>
			{children}
		</MovieContext.Provider>
	);
};
