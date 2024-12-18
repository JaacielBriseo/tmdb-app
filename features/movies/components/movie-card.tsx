import React from 'react';

import NextLink from 'next/link';

import {
	Box,
	Card,
	CardMedia,
	CardContent,
	Link as MuiLink,
	Typography,
} from '@mui/material';

import { ToggleFavoriteMovieButton } from '@/features/movies/components/favorite-movies/toggle-favorite-movie-button';

import type { MovieGeneralInfo } from '@/lib/apis/movies-api/movies-api-interfaces';

interface Props {
	movie: MovieGeneralInfo;
}

export const MovieCard = ({ movie }: Props) => {
	return (
		<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
			<Box
				sx={{
					position: 'relative',
				}}>
				<ToggleFavoriteMovieButton movie={movie} />

				<MuiLink
					href={`/${movie.id}`}
					component={NextLink}>
					<CardMedia
						component='img'
						height='300'
						image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt={movie.title}
						fetchPriority='high'
					/>
				</MuiLink>
			</Box>
			<CardContent sx={{ flexGrow: 1 }}>
				<MuiLink
					gutterBottom
					variant='h6'
					href={`/${movie.id}`}
					component={NextLink}>
					{movie.title}
				</MuiLink>
				<Typography
					variant='body2'
					color='text.secondary'>
					{movie.overview.length > 100
						? `${movie.overview.substring(0, 100)}...`
						: movie.overview}
				</Typography>
				<Box sx={{ mt: 2 }}>
					<Typography
						variant='body2'
						color='text.secondary'>
						Release Date:{' '}
						{movie.release_date
							? new Date(movie.release_date).toLocaleDateString()
							: 'N/A'}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'>
						Rating: {movie.vote_average}/10 ({movie.vote_count} votes)
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};
