import { useCallback } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import { createSearchParams } from '@/lib/utils';

interface PaginationOptions {
	totalPages?: number;
}

export const usePagination = (options?: PaginationOptions) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const totalPages = options?.totalPages;

	const currentPage = Number(searchParams.get('page')) || 1;

	const goToPage = useCallback(
		(page: number) => {
			if (page < 1) {
				console.warn(`Page number should be greater than 0. Received: ${page}`);
				return;
			}

			if (totalPages && page > totalPages) {
				console.warn(
					`Page number should be less than or equal to the total number of pages. Received: ${page}`
				);
				return;
			}

			const newSearchParams = createSearchParams(searchParams, {
				page: page.toString(),
			});
			const newUrl = `${pathname}?${newSearchParams}`;
			router.push(newUrl);
		},
		[router, pathname, searchParams, totalPages]
	);

	const goToNextPage = useCallback(() => {
		if (totalPages && currentPage < totalPages) {
			goToPage(currentPage + 1);
		}
	}, [currentPage, totalPages, goToPage]);

	const goToPreviousPage = useCallback(() => {
		if (currentPage > 1) {
			goToPage(currentPage - 1);
		}
	}, [currentPage, goToPage]);

	return {
		//* Properties
		currentPage,
		totalPages,

		//* Methods
		goToPage,
		goToNextPage,
		goToPreviousPage,
	};
};
