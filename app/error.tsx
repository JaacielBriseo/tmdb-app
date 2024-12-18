'use client';

import { useEffect } from 'react';

import { Link } from '@mui/material';

import { GoBackButton } from '@/components/go-back-button';

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className='flex items-center justify-center min-h-screen'>
			<div className='text-center space-y-4'>
				<h1 className='text-9xl font-bold text-white animate-bounce'>500</h1>
				<p className='text-4xl font-bold text-white animate-pulse'>
					Oops! Something went wrong
				</p>
				<p className='text-lg text-white'>
					We&apos;re sorry, but there was an error processing your request.
				</p>
				<div className='flex items-end justify-center gap-5'>
					<GoBackButton />
					<Link onClick={reset}>Try again</Link>
				</div>
			</div>
		</div>
	);
}
