import NextLink from 'next/link';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';

export const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed'>
				<Container maxWidth='lg'>
					<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Button
							LinkComponent={NextLink}
							href='/'
							color='inherit'>
							Popular movies
						</Button>
						<Button
							LinkComponent={NextLink}
							href='/favorites'
							color='inherit'>
							Favorites
						</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};
