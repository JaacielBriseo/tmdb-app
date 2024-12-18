import localFont from 'next/font/local';

import { Navbar } from '@/components/navbar';
import { Providers } from '@/components/providers';

import type { Metadata } from 'next';

import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'The movie db app',
	description: 'A movie db app, built with Next.js and Material-UI',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers>
					<Navbar />
					<div className='pt-20 pb-8'>{children}</div>
				</Providers>
			</body>
		</html>
	);
}
