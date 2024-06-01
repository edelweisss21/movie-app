import { useContext } from 'react';
import { IMovies } from '../../assets/data';
import { MovieContext } from '../../context/movie-context';
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import movieIcon from '../../assets/icons/icon-category-movie.svg';
import tvSeriesIcon from '../../assets/icons/icon-category-tv.svg';
import BookmarkIcon from '../icons/bookmark-icon';
import BookmarkEmptyIcon from '../icons/bookmark-empy-icon';

type IMovieTrendCardProps = {
	movie: IMovies;
};

const MovieTrendCard = ({ movie }: IMovieTrendCardProps) => {
	const { dispatch } = useContext(MovieContext);
	const handleToggleBookmark = (id: string) => {
		dispatch({ type: 'TOGGLE BOOKMARK', id });
	};

	return (
		<Card
			key={movie.id}
			elevation={0}
			style={{ backgroundColor: 'transparent' }}
		>
			<CardContent
				sx={{
					p: 0,
					position: 'relative',
					display: 'flex',
				}}
			>
				<img
					src={movie.thumbnail.regular.large}
					alt={movie.title}
					style={{ width: '300px', height: '100%', borderRadius: '8px' }}
				/>
				<Box
					position='absolute'
					top={0}
					left={0}
					right={0}
					bottom={24}
					bgcolor='rgba(0,0,0,0.5)'
					borderRadius='8px'
				/>
				<Stack
					mt='6px'
					spacing={0}
					position='absolute'
					bottom={0}
					left={0}
					right={0}
					p={4}
				>
					<Grid container alignItems='center' spacing={1}>
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
									width: '1rem',
									height: '1rem',
									borderRadius: 'full',
								}}
							></Box>
						</Grid>
						<Grid item>
							<img
								src={movie.category === 'Movies' ? movieIcon : tvSeriesIcon}
								alt={movie.title}
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
							<Typography
								fontSize={10}
								color='#E0E0E0'
								aria-label='movie rating'
							>
								{movie.rating}
							</Typography>
						</Grid>
					</Grid>
					<Typography color='#E0E0E0' p={0} aria-label='movie title'>
						{movie.title}
					</Typography>
				</Stack>
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						display: 'flex',
						justifyContent: 'flex-end',
						p: '16px',
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
							<BookmarkIcon fill='#E0E0E0' />
						) : (
							<BookmarkEmptyIcon />
						)}
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

export default MovieTrendCard;
