import { Box } from '@mui/material';
import { ReactNode } from 'react';
import Sidebar from '../components/sidebar/Sidebar';

interface ILayoutProvider {
	children: ReactNode;
}

const LayoutProvider = ({ children }: ILayoutProvider) => {
	return (
		<Box
			sx={{
				backgroundColor: '#10141F',
				display: 'flex',
				flexDirection: {
					xs: 'column',
					lg: 'row',
				},
				color: '#ffffff',
				gap: 3,
				p: 3,
				overflowY: 'hidden',
				height: '100vh',
			}}
		>
			<Sidebar />
			<Box sx={{ width: '100%', overflowY: 'scroll' }}>{children}</Box>
		</Box>
	);
};

export default LayoutProvider;
