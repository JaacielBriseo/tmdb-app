import type { ReadonlyURLSearchParams } from 'next/navigation';

/**
 * Creates a new URLSearchParams object based on the current search params and the provided params.
 * @param currentSearchParams - The current URLSearchParams object.
 * @param params - An object containing key-value pairs to be added or updated in the search params.
 * @returns A string representation of the updated search params.
 * @example createSearchParams(new URLSearchParams('foo=bar'), { foo: 'baz', bar: 123 });
 * => 'foo=baz&bar=123'
 */
export const createSearchParams = (
	currentSearchParams: ReadonlyURLSearchParams | URLSearchParams,
	params: Record<string, string | number | null | string[]>
) => {
	const newSearchParams = new URLSearchParams(currentSearchParams.toString());

	for (const [key, value] of Object.entries(params)) {
		if (value === null || value === undefined || value === '') {
			newSearchParams.delete(key);
		} else if (Array.isArray(value) && value.length === 0) {
			newSearchParams.delete(key);
		} else {
			newSearchParams.set(
				key,
				Array.isArray(value) ? value.join(',') : String(value)
			);
		}
	}

	return newSearchParams.toString();
};
