'use client';

import {
	createContext,
	useContext,
	useEffect,
	useState,
	type PropsWithChildren,
} from 'react';

import type { MovieGeneralInfo } from '@/lib/apis/movies-api/movies-api-interfaces';

interface FavoriteMoviesContextValue {
	favoriteMovies: MovieGeneralInfo[];
	addFavoriteMovie: (movie: MovieGeneralInfo) => void;
	removeFavoriteMovie: (movie: MovieGeneralInfo) => void;
}

const isServer = typeof window === 'undefined';

const FavoriteMoviesContext = createContext<
	FavoriteMoviesContextValue | undefined
>(undefined);

export const FavoriteMoviesProvider = ({ children }: PropsWithChildren) => {
	const [favoriteMovies, setFavoriteMovies] = useState<MovieGeneralInfo[]>([]);

	const initializeFavoriteMovies = () => {
		if (isServer) {
			return [];
		}
		try {
			const favoriteMovies = localStorage.getItem('favoriteMovies');
			return favoriteMovies ? JSON.parse(favoriteMovies) : [];
		} catch (error) {
			console.error('Error getting favorite movies from localStorage', error);

			return [];
		}
	};

	useEffect(() => {
		if (!isServer) {
			setFavoriteMovies(initializeFavoriteMovies());
		}
	}, []);

	const addFavoriteMovie = (movie: MovieGeneralInfo) => {
		setFavoriteMovies(prev => [...prev, movie]);

		localStorage.setItem(
			'favoriteMovies',
			JSON.stringify([...favoriteMovies, movie])
		);
	};

	const removeFavoriteMovie = (movie: MovieGeneralInfo) => {
		setFavoriteMovies(prev => prev.filter(m => m.id !== movie.id));

		localStorage.setItem(
			'favoriteMovies',
			JSON.stringify(favoriteMovies.filter(m => m.id !== movie.id))
		);
	};

	return (
		<FavoriteMoviesContext.Provider
			value={{ favoriteMovies, addFavoriteMovie, removeFavoriteMovie }}>
			{children}
		</FavoriteMoviesContext.Provider>
	);
};

export const useFavoriteMoviesContext = () => {
	const context = useContext(FavoriteMoviesContext);

	if (!context) {
		throw new Error(
			'useFavoriteMoviesContext must be used within a FavoriteMoviesProvider'
		);
	}

	return context;
};
