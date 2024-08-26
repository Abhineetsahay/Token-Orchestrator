import crypto from 'crypto';

export const generateApiKey = (): string => {
  return crypto.randomBytes(20).toString('hex');
};
