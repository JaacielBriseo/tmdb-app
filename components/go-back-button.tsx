'use client';

import { useRouter } from 'next/navigation';

import { Link } from '@mui/material';

export const GoBackButton = () => {
	const router = useRouter();

	return (
		<Link
			onClick={() => router.back()}
			sx={{ cursor: 'pointer' }}>
			Go back
		</Link>
	);
};
