import { NextResponse } from 'next/server';

export function middleware(request) {
  const isAuthenticated = true; // replace with real auth logic
  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}