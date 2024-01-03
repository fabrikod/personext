import { NextResponse } from 'next/server'

export async function middleware(request) {
  const token =
    process.env.NODE_ENV === 'production'
      ? request.cookies.get('__Secure-next-auth.session-token')
      : request.cookies.get('next-auth.session-token')

  if (request.nextUrl.pathname.startsWith('/panel')) {
    if (!!!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
  }

  if (request.nextUrl.pathname.startsWith('/api/admin')) {
    if (!!!token) {
      return new NextResponse('Unauthorized', { status: 401 })
    }
    return NextResponse.next()
  }

  if (request.nextUrl.pathname.startsWith('/login')) {
    if (!!token) {
      return NextResponse.redirect(new URL('/panel', request.url))
    }
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/panel/:path*', '/api/admin/:path*', '/login'],
}
