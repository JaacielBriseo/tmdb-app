export const getEnv = (key: string): string => {
	const value = process.env[key];

	if (!value) {
		throw new Error(`Missing environment variable: ${key}`);
	}

	return value;
};

export const env = {
	MOVIES_DB_API_TOKEN: getEnv('MOVIES_DB_API_TOKEN'),
	MOVIES_DB_API_URL: getEnv('MOVIES_DB_API_URL'),
};
