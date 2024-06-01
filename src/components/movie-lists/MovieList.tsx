import { Grid, Paper } from '@mui/material';
import { IMovies } from '../../assets/data';
import MovieCard from '../movie-cards/MovieCard';

interface IMovieList {
	recommendList: IMovies[];
}

const MovieList = ({ recommendList }: IMovieList) => {
	return (
		<Grid container spacing={2}>
			{recommendList.map((movie) => (
				<Grid item key={movie.id}>
					<Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
						<MovieCard movie={movie} />
					</Paper>
				</Grid>
			))}
		</Grid>
	);
};

export default MovieList;
