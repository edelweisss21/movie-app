import { ChangeEvent, useCallback, useContext, useState } from 'react';
import { IMovies } from '../assets/data';
import { MovieContext } from '../context/movie-context';

export const useSearchAndMovies = () => {
	const [search, setSearch] = useState('');
	const [searchList, setSearchList] = useState<IMovies[]>([]);
	const { state } = useContext(MovieContext);
	const { movies } = state;
	const trendingList = movies.filter((movie) => movie.isTrending === true);
	const recommendList = movies.filter((movie) => movie.isTrending !== true);

	const handleSearch = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setSearch(e.target.value);
			const newList = movies.filter((movie) =>
				movie.title.toLowerCase().includes(search.toLowerCase())
			);
			setSearchList(newList);
		},
		[searchList]
	);

	return {
		search,
		searchList,
		movies,
		trendingList,
		recommendList,
		handleSearch,
	};
};
