'use server';

import { clientCDN } from '@/lib/client';
import { getProductBySlugQuery } from '@/queries/product';

export const getProduct = async (slug: string) => {
  const product = await clientCDN.fetch(getProductBySlugQuery, { slug });

  if (!product) {
    return null;
  }

  return product;
};
