import { Container } from '@mui/material';
import { MoviesGridFallback } from '@/features/movies/components/movies-grid';

const LoadingRootPage = async () => {
	return (
		<Container maxWidth='lg'>
			<MoviesGridFallback />
		</Container>
	);
};

export default LoadingRootPage;
