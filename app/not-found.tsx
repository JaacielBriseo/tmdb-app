import { GoBackButton } from '@/components/go-back-button';
import NextLink from 'next/link';
import { Link } from '@mui/material';
export default function NotFound() {
	return (
		<div className='flex items-center justify-center min-h-screen'>
			<div className='text-center space-y-4'>
				<h1 className='text-9xl font-bold text-white animate-[bounce_1s_ease-in-out_5]'>404</h1>
				<p className='text-4xl font-bold text-white animate-pulse rep'>
					Page Not Found
				</p>
				<p className='text-lg text-white'>
					Oops! The page you&apos;re looking for doesn&apos;t exist.
				</p>
				<div className='flex items-end justify-center gap-5'>
					<GoBackButton />
					<Link
						href='/'
						component={NextLink}>
						Go Home
					</Link>
				</div>
			</div>
		</div>
	);
}
