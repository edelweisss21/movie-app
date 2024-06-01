import {
	InputBase,
	Paper,
	Box,
	InputAdornment,
	Typography,
} from '@mui/material';
import LayoutProvider from '../../LayoutProvider/LayoutProvider';
import SearchIcon from '../../assets/icons/icon-search.svg';
import MovieList from '../../components/movie-lists/MovieList';
import { useSearchAndMovies } from '../../hooks/useSearchAndMovies';

const Bookmark = () => {
	const { search, searchList, movies, handleSearch } = useSearchAndMovies();
	const bookmarks = movies.filter((movie) => movie.isBookmarked === true);
	return (
		<LayoutProvider>
			<Box>
				<Paper
					component='form'
					sx={{
						display: 'flex',
						alignItems: 'center',
						borderRadius: 'default',
						p: 1,
						backgroundColor: '#10141f',
						border: 'none',
					}}
				>
					<InputBase
						placeholder='Search for movies or TV series'
						sx={{
							ml: 1,
							flex: 1,
							color: '#ffffff',
							border: 'none',
						}}
						value={search}
						onChange={handleSearch}
						startAdornment={
							<InputAdornment position='start'>
								<img
									src={SearchIcon}
									alt='search icon'
									width={20}
									height={20}
								/>
							</InputAdornment>
						}
					/>
				</Paper>
			</Box>
			<Box py={2} px={4}>
				{search === '' ? (
					<Box width='100%'>
						<Box width='100%'>
							<Typography variant='h5' component='h1' my={6} fontWeight={400}>
								Tv Series
							</Typography>
							<MovieList
								recommendList={search === '' ? bookmarks : searchList}
							/>
						</Box>
					</Box>
				) : (
					<Box width='100%'>
						<Typography>
							Found {searchList.length} results for "{search}"
						</Typography>
						<MovieList recommendList={searchList} />
					</Box>
				)}
			</Box>
		</LayoutProvider>
	);
};

export default Bookmark;
