import { NextResponse } from 'next/server'

export async function middleware(request) {
  console.log('request.cookiesrequest.cookies', request.cookies)
  if (request.nextUrl.pathname.startsWith('/panel')) {
    if (!!!request.cookies.get('next-auth.session-token')) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
  }

  if (request.nextUrl.pathname.startsWith('/api/admin')) {
    if (!!!request.cookies.get('next-auth.session-token')) {
      return new NextResponse('Unauthorized', { status: 401 })
    }
    return NextResponse.next()
  }

  if (request.nextUrl.pathname.startsWith('/login')) {
    if (!!request.cookies.get('next-auth.session-token')) {
      return NextResponse.redirect(new URL('/panel', request.url))
    }
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/panel/:path*', '/api/admin/:path*', '/login'],
}
