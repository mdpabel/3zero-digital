import { NextResponse } from 'next/server';
import { auth } from './auth';

const authRoutes = ['/login', '/register'];
const adminRoutes = ['/admin(*)'];
const dashboardRoutes = ['/dashboard(*)'];
const DEFAULT_LOGIN_REDIRECT = '/dashboard';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isAdminRoute = adminRoutes.includes(nextUrl.pathname);
  const isDashboardRoute = dashboardRoutes.includes(nextUrl.pathname);

  console.log({
    isLoggedIn,
    pathname: nextUrl.pathname,
    isDashboardRoute,
    isAdminRoute,
    isAuthRoute,
  });

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    } else {
      return NextResponse.next();
    }
  }

  if (!isLoggedIn && (isAdminRoute || isDashboardRoute)) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl),
    );
  }

  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
