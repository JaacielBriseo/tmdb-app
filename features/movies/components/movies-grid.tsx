import { Container, Grid2, Skeleton } from '@mui/material';

import { MovieCard } from '@/features/movies/components/movie-card';

import type { MovieGeneralInfo } from '@/lib/apis/movies-api/movies-api-interfaces';

interface Props {
	movies: MovieGeneralInfo[];
}

export const MoviesGrid = ({ movies }: Props) => {
	return (
		<Grid2
			container
			spacing={4}>
			{movies.map(movie => (
				<Grid2
					key={movie.id}
					size={{
						xs: 12,
						sm: 6,
						md: 4,
					}}>
					<MovieCard movie={movie} />
				</Grid2>
			))}
		</Grid2>
	);
};

export const MoviesGridFallback = () => {
	return (
		<Container maxWidth='lg'>
			<Grid2
				container
				spacing={4}>
				{Array.from({ length: 12 }).map((_, index) => (
					<Grid2
						key={index}
						size={4}>
						<Skeleton
							variant='rectangular'
							width={360}
							height={500}
							sx={{ borderRadius: 1 }}
						/>
					</Grid2>
				))}
			</Grid2>
		</Container>
	);
};
