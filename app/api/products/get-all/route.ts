import { clientCDN } from '@/lib/client';
import { getAllProductsQuery } from '@/queries/product';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest) => {
  try {
    const products = await clientCDN.fetch(getAllProductsQuery);

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: 'An unknown error occurred.' },
        { status: 500 },
      );
    }
  }
};
