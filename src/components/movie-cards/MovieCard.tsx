import { useContext } from 'react';
import { IMovies } from '../../assets/data';
import { MovieContext } from '../../context/movie-context';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import movieIcon from '../../assets/icons/icon-category-movie.svg';
import tvSeriesIcon from '../../assets/icons/icon-category-tv.svg';
import BookmarkIcon from '../icons/bookmark-icon';
import BookmarkEmptyIcon from '../icons/bookmark-empy-icon';

type IMovieCardProps = {
	movie: IMovies;
};

const MovieCard = ({ movie }: IMovieCardProps) => {
	const { dispatch } = useContext(MovieContext);
	const handleToggleBookmark = (id: string) => {
		dispatch({ type: 'TOGGLE BOOKMARK', id });
	};

	return (
		<Card
			variant='outlined'
			sx={{
				bgcolor: 'transparent',
				width: '300px',
				color: '#E0E0E0',
				my: 3,
				border: 'none',
			}}
		>
			<CardContent sx={{ p: 0, position: 'relative' }}>
				<Grid container spacing={1}>
					<Grid item>
						<img
							src={movie.thumbnail.regular.large}
							alt=''
							style={{ width: '400px', height: '180px', borderRadius: '8px' }}
						/>
					</Grid>
					<Grid item xs={8}>
						<Grid container spacing={1} alignItems='center'>
							<Grid item>
								<Typography
									fontSize={10}
									color='#E0E0E0'
									aria-label='year of movie'
								>
									{movie.year}
								</Typography>
							</Grid>
							<Grid item>
								<Box
									sx={{
										width: '4px',
										height: '4px',
										background: '#BDBDBD',
										borderRadius: '50%',
									}}
								/>
							</Grid>
							<Grid item>
								<img
									src={movie.category === 'Movies' ? movieIcon : tvSeriesIcon}
									alt=''
									width={16}
									height={16}
								/>
							</Grid>
							<Grid item>
								<Typography
									fontSize={10}
									color='#E0E0E0'
									aria-label='movie category'
								>
									{movie.category}
								</Typography>
							</Grid>
							<Grid item>
								<Box
									sx={{
										width: '4px',
										height: '4px',
										background: '#BDBDBD',
										borderRadius: '50%',
									}}
								/>
							</Grid>
							<Grid item>
								<Typography
									fontSize={10}
									color='#E0E0E0'
									aria-label='movie rating'
								>
									{movie.rating}
								</Typography>
							</Grid>
						</Grid>
						<Typography aria-label='movie rating' padding={0}>
							{movie.title}
						</Typography>
					</Grid>
					<Grid item xs={2} sx={{ position: 'absolute', top: 0, right: 0 }}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'flex-end',
								alignItems: 'center',
								p: '1rem',
							}}
						>
							<Box
								onClick={() => handleToggleBookmark(movie.id)}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									p: '1rem',
									backgroundColor: '#000',
									borderRadius: '10%',
									cursor: 'pointer',
									width: '50px',
									height: '50px',
									'&: hover': { opacity: 0.8 },
								}}
							>
								{movie.isBookmarked ? (
									<BookmarkIcon fill={'#E0E0E0'} />
								) : (
									<BookmarkEmptyIcon />
								)}
							</Box>
						</Box>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default MovieCard;
