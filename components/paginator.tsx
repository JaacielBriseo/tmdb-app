'use client';

import { Pagination } from '@mui/material';

import { usePagination } from '@/hooks/use-pagination';

interface Props {
	totalPages?: number;
}

export const Paginator = ({ totalPages }: Props) => {
	const { goToPage, currentPage } = usePagination({ totalPages });

	return (
		<Pagination
			count={totalPages}
			hideNextButton={!totalPages}
			hidePrevButton={!totalPages}
			page={currentPage}
			onChange={(_, page) => goToPage(page)}
			variant='outlined'
		/>
	);
};
