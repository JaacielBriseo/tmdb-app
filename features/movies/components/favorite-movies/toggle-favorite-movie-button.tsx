'use client';

import { IconButton } from '@mui/material';

import { useFavoriteMoviesContext } from '@/features/movies/components/favorite-movies/favorite-movies-context';

import type { MovieGeneralInfo } from '@/lib/apis/movies-api/movies-api-interfaces';

interface Props {
	movie: MovieGeneralInfo;
}

export const ToggleFavoriteMovieButton = ({ movie }: Props) => {
	const { addFavoriteMovie, favoriteMovies, removeFavoriteMovie } =
		useFavoriteMoviesContext();

	const isFavorite = favoriteMovies.some(
		favoriteMovie => favoriteMovie.id === movie.id
	);

	const handleToggleFavorite = () => {
		if (isFavorite) {
			removeFavoriteMovie(movie);
		} else {
			addFavoriteMovie(movie);
		}
	};

	return (
		<IconButton
			aria-label='add to favorites'
			onClick={handleToggleFavorite}
			sx={{
				position: 'absolute',
				top: 0,
				right: 0,
			}}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill={isFavorite ? 'currentColor' : 'none'}
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'>
				<path d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z' />
			</svg>
		</IconButton>
	);
};
