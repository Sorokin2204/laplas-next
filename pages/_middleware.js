import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith('/_next') || req.nextUrl.pathname.includes('/api/') || PUBLIC_FILE.test(req.nextUrl.pathname)) {
    return;
  }

  if (req.nextUrl.locale === 'ru') {
    return NextResponse.redirect(new URL(`/ru${req.nextUrl.pathname}`, req.url));
  }
}
