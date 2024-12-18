import { env } from '@/config/envs';

export class MoviesApiClient {
	private static instance: MoviesApiClient;
	private constructor() {}

	public static getInstance(): MoviesApiClient {
		if (!MoviesApiClient.instance) {
			MoviesApiClient.instance = new MoviesApiClient();
		}
		return MoviesApiClient.instance;
	}

	async request(endpoint: string, options: RequestInit = {}) {
		const apiUrl = env.MOVIES_DB_API_URL;
		const token = env.MOVIES_DB_API_TOKEN;

		const url = `${apiUrl}${endpoint}`;

		const headers = new Headers(options.headers);
		headers.set('Authorization', `Bearer ${token}`);
		headers.set('Content-Type', 'application/json');

		const response = await fetch(url, {
			...options,
			headers,
		});

		return response;
	}
}

export const moviesApiClientInstance = MoviesApiClient.getInstance();
