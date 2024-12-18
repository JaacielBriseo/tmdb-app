'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		mode: 'dark',
	},
	components: {
		MuiToolbar: {
			styleOverrides: {
				root: {
					padding: 0,
					'@media (min-width: 600px)': {
						padding: 0,
					},
				},
			},
		},
	},
});
