import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token?.email,
  },
});

export const config = {
  matcher: ['/produits/:path*'],
};
