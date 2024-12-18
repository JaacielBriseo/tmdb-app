import { moviesApiClientInstance } from './movies-api-client';

import type {
	MovieDetailedInfo,
	GetPopularMoviesResponse,
} from './movies-api-interfaces';

type EndpointResponse<T> =
	| { ok: true; data: T }
	| { ok: false; error: string; message: string };

export const moviesApiEndpoints = {
	getPopularMovies: async (queryOptions?: {
		page?: number;
	}): Promise<EndpointResponse<GetPopularMoviesResponse>> => {
		try {
			const page = queryOptions?.page || 1;

			const response = await moviesApiClientInstance.request(
				`/movie/popular?page=${page}`
			);

			const jsonResponse = await response.json();

			if (!jsonResponse.results || !response.ok) {
				return {
					ok: false,
					error: 'UNKNOWN',
					message: 'An unknown error occurred.',
				};
			} else {
				return {
					ok: true,
					data: jsonResponse,
				};
			}
		} catch (error) {
			console.error(error);

			return {
				ok: false,
				error: 'UNKNOWN',
				message: 'An unknown error occurred.',
			};
		}
	},
	getMovieById: async (
		movieId: number
	): Promise<EndpointResponse<MovieDetailedInfo>> => {
		try {
			const endpointUrl = `/movie/${movieId}`;

			const response = await moviesApiClientInstance.request(endpointUrl);

			const jsonResponse = await response.json();

			if (!jsonResponse.id || !response.ok) {
				switch (jsonResponse.status_code) {
					case 34:
						return {
							ok: false,
							error: 'NOT_FOUND',
							message: 'The resource you requested could not be found.',
						};

					default:
						return {
							ok: false,
							error: 'UNKNOWN',
							message: 'An unknown error occurred.',
						};
				}
			} else {
				return {
					ok: true,
					data: jsonResponse,
				};
			}
		} catch (error) {
			console.error(error);
			return {
				ok: false,
				error: 'UNKNOWN',
				message: 'An unknown error occurred.',
			};
		}
	},
};
