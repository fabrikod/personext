import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.SECRET })

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
