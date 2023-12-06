'use server';

import { verifyToken } from '@/lib/jwt';

export const getEmailByToken = async (token: string) => {
  const tokenVerified = await verifyToken(token);
  if (!tokenVerified || !tokenVerified?.obj || !tokenVerified?.obj?.email) {
    return null;
  }

  return tokenVerified.obj.email;
};
