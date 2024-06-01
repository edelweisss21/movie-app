import { Box, Grid, Paper } from '@mui/material';
import { IMovies } from '../../assets/data';
import MovieTrendCard from '../movie-cards/MovieTrendCard';

interface IMovieTrendingList {
	trendingList: IMovies[];
}
const MovieTrendingList = ({ trendingList }: IMovieTrendingList) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: 2,
			}}
		>
			{trendingList.map((movie) => (
				<Grid item key={movie.id}>
					<Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
						<MovieTrendCard movie={movie} />
					</Paper>
				</Grid>
			))}
		</Box>
	);
};

export default MovieTrendingList;
