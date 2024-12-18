'use client';

import { Container } from '@mui/material';

import { MoviesGrid } from '@/features/movies/components/movies-grid';
import { useFavoriteMoviesContext } from '@/features/movies/components/favorite-movies/favorite-movies-context';

const FavoritesPage = () => {
	const { favoriteMovies } = useFavoriteMoviesContext();

	return (
		<>
			{favoriteMovies.length > 0 ? (
				<Container maxWidth='lg'>
					<MoviesGrid movies={favoriteMovies} />
				</Container>
			) : (
				<div className='flex items-center justify-center min-h-[calc(100vh-8rem)]'>
					<div className='text-center space-y-4'>
						<p className='text-lg text-white'>
							You haven&apos;t added any movies to your favorites.
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default FavoritesPage;
