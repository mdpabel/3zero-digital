import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/dashboard/profile(.*)',
  '/dashboard/orders(.*)',
  '/dashboard/support(.*)',
]);
const isAuthRoutes = createRouteMatcher([
  '/login(.*)',
  '/forgot-password(.*)',
  '/reset-password(.*)',
  '/signup(.*)',
  '/verify-email(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isAuthRoutes(req) && !isProtectedRoute(req)) {
    return NextResponse.next();
  }

  const session = (await auth()).sessionId;

  if (session && isAuthRoutes(req)) {
    console.log({
      test: isAuthRoutes(req),
      hello: 1,
    });
    const url = new URL('/dashboard', req.url);
    return NextResponse.redirect(url);
  }

  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for api routes
    '/(api|trpc)(.*)',
  ],
};
