'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { theme } from '@/config/theme';
import { useMounted } from '@/hooks/use-mounted';

import { FavoriteMoviesProvider } from '@/features/movies/components/favorite-movies/favorite-movies-context';

import type { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
	const mounted = useMounted();

	if (!mounted) {
		return null;
	}
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
