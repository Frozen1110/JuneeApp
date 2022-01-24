import config from './client-config.json';

export const environmentConfig = config[process.env.NEXT_PUBLIC_ENVIRONMENT || 'production'];