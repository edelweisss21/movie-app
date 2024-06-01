import { Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../navLinks';

const Sidebar = () => {
	const { pathname } = useLocation();
	console.log('location', location);
	return (
		<Box
			sx={{
				backgroundColor: '#161d2f',
				p: 2,
				borderRadius: 2,
				display: 'flex',
				flexDirection: {
					xs: 'row',
					lg: 'column',
				},
				alignItems: 'center',
				justifyContent: 'space-between',
				width: {
					sm: '100%',
					lg: 200,
				},
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: {
						xs: 'row',
						lg: 'column',
					},
					gap: 5,
					alignItems: {
						xs: 'center',
						lg: 'start',
					},
					width: '100%',
				}}
			>
				<Box
					sx={{
						display: { xs: 'none', sm: 'flex' },
					}}
				>
					<Typography
						variant='h5'
						component='h1'
						my={2}
						fontWeight={400}
						fontSize={18}
					>
						EdelMovie
					</Typography>
				</Box>
				<Box
					sx={{
						py: {
							xs: '0px',
							lg: '16px',
						},
						display: 'flex',
						flexDirection: {
							xs: 'row',
							lg: 'column',
						},
						gap: 4,
					}}
				>
					{navLinks.map((item, index) => (
						<Link key={index} to={item.link} style={{ textDecoration: 'none' }}>
							<Box
								sx={{
									display: { xs: 'none', sm: 'flex' },
									alignItems: 'center',
									gap: 2,
									color: '#ffffff',
									textDecoration: 'none',
									filter: `${
										pathname === item.link
											? 'invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)'
											: 'invert(84%)'
									}`,
									transition: 'color 0.3s ease',
									'&:hover': {
										color: 'lightgray',
									},
								}}
							>
								<img
									src={item.icon}
									alt={item.name}
									style={{
										width: '18px',
									}}
								/>
								<Typography
									style={{
										filter: 'invert(100%)',
									}}
								>
									{item.name}
								</Typography>
							</Box>
						</Link>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Sidebar;
