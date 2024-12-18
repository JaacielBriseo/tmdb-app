import { notFound } from 'next/navigation';

import { moviesApiEndpoints } from '@/lib/apis/movies-api/movies-api-endpoints';

import {
	Box,
	Chip,
	Container,
	Divider,
	Grid2 as Grid,
	List,
	ListItem,
	ListItemText,
	Paper,
	Typography,
} from '@mui/material';

import { GoBackButton } from '@/components/go-back-button';

interface Props {
	params: { movieId: string };
}

const MovieByIdPage: React.FC<Props> = async ({ params }) => {
	const movieData = await moviesApiEndpoints.getMovieById(
		Number(params.movieId)
	);

	if (!movieData.ok) {
		return notFound();
	}

	const movie = movieData.data;

	return (
		<Container maxWidth='lg'>
			<GoBackButton />
			<Paper
				elevation={3}
				sx={{ p: 4, mt: 4 }}>
				<Grid
					container
					spacing={4}>
					<Grid
						size={{
							xs: 12,
							md: 4,
						}}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.title}
							style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
						/>
					</Grid>
					<Grid
						size={{
							xs: 12,
							md: 8,
						}}>
						<Typography
							variant='h3'
							component='h1'
							gutterBottom>
							{movie.title}
						</Typography>
						<Typography
							variant='subtitle1'
							color='text.secondary'
							paragraph>
							{movie.tagline}
						</Typography>
						<Box sx={{ mb: 2 }}>
							{movie.genres.map(genre => (
								<Chip
									key={genre.id}
									label={genre.name}
									sx={{ mr: 1, mb: 1 }}
								/>
							))}
						</Box>
						<Typography
							variant='body1'
							paragraph>
							{movie.overview}
						</Typography>
						<Grid
							container
							spacing={2}>
							<Grid
								size={{
									xs: 12,
									sm: 6,
								}}>
								<Typography variant='subtitle2'>Release Date</Typography>
								<Typography variant='body2'>
									{movie.release_date
										? new Date(movie.release_date).toLocaleDateString()
										: 'N/A'}
								</Typography>
							</Grid>
							<Grid
								size={{
									xs: 12,
									sm: 6,
								}}>
								<Typography variant='subtitle2'>Runtime</Typography>
								<Typography variant='body2'>{movie.runtime} minutes</Typography>
							</Grid>
							<Grid
								size={{
									xs: 12,
									sm: 6,
								}}>
								<Typography variant='subtitle2'>Budget</Typography>
								<Typography variant='body2'>
									${movie.budget.toLocaleString()}
								</Typography>
							</Grid>
							<Grid
								size={{
									xs: 12,
									sm: 6,
								}}>
								<Typography variant='subtitle2'>Revenue</Typography>
								<Typography variant='body2'>
									${movie.revenue.toLocaleString()}
								</Typography>
							</Grid>
							<Grid
								size={{
									xs: 12,
									sm: 6,
								}}>
								<Typography variant='subtitle2'>Vote Average</Typography>
								<Typography variant='body2'>{movie.vote_average}/10</Typography>
							</Grid>
							<Grid
								size={{
									xs: 12,
									sm: 6,
								}}>
								<Typography variant='subtitle2'>Vote Count</Typography>
								<Typography variant='body2'>
									{movie.vote_count.toLocaleString()}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Divider sx={{ my: 4 }} />
				<Grid
					container
					spacing={4}>
					<Grid
						size={{
							xs: 12,
							md: 6,
						}}>
						<Typography
							variant='h6'
							gutterBottom>
							Production Companies
						</Typography>
						<List>
							{movie.production_companies.map(company => (
								<ListItem key={company.id}>
									<ListItemText
										primary={company.name}
										secondary={company.origin_country}
									/>
								</ListItem>
							))}
						</List>
					</Grid>
					<Grid
						size={{
							xs: 12,
							md: 6,
						}}>
						<Typography
							variant='h6'
							gutterBottom>
							Production Countries
						</Typography>
						<List>
							{movie.production_countries.map(country => (
								<ListItem key={country.iso_3166_1}>
									<ListItemText primary={country.name} />
								</ListItem>
							))}
						</List>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};

export default MovieByIdPage;
