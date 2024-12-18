import { Box, Container } from '@mui/material';

import { MoviesGrid } from '@/features/movies/components/movies-grid';

import { moviesApiEndpoints } from '@/lib/apis/movies-api/movies-api-endpoints';

import { Paginator } from '@/components/paginator';

interface Props {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
}

export default async function Home({ searchParams }: Props) {
	const pageParam = !isNaN(Number(searchParams.page))
		? Number(searchParams.page)
		: 1;

	const moviesData = await moviesApiEndpoints.getPopularMovies({
		page: pageParam,
	});

	if (!moviesData.ok) {
		return (
			<div className='flex items-center justify-center min-h-[calc(100vh-8rem)]'>
				<div className='text-center space-y-4'>
					<p className='text-4xl font-bold text-white'>
						Oops! Something went wrong 🤯
					</p>
					<p className='text-lg text-white'>Please try again later.</p>
				</div>
			</div>
		);
	}

	const movies = moviesData.data.results;

	return (
		<Container maxWidth='lg'>
			<MoviesGrid movies={movies} />
			<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
				{/* Max allowed in tmdb endpoints */}
				<Paginator totalPages={500} />
			</Box>
		</Container>
	);
}
