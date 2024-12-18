'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { theme } from '@/config/theme';

import { FavoriteMoviesProvider } from '@/features/movies/components/favorite-movies/favorite-movies-context';

import type { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<FavoriteMoviesProvider>
					<CssBaseline />
					{children}
				</FavoriteMoviesProvider>
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
};
