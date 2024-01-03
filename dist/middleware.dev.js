"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middleware = middleware;
exports.config = void 0;

var _server = require("next/server");

function middleware(request) {
  var token;
  return regeneratorRuntime.async(function middleware$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = process.env.NODE_ENV === 'production' ? request.cookies.get('__Secure-next-auth.session-token') : request.cookies.get('next-auth.session-token');

          if (!request.nextUrl.pathname.startsWith('/panel')) {
            _context.next = 5;
            break;
          }

          if (!!token) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.redirect(new URL('/login', request.url)));

        case 4:
          return _context.abrupt("return", _server.NextResponse.next());

        case 5:
          if (!request.nextUrl.pathname.startsWith('/api/admin')) {
            _context.next = 9;
            break;
          }

          if (!!token) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", new _server.NextResponse('Unauthorized', {
            status: 401
          }));

        case 8:
          return _context.abrupt("return", _server.NextResponse.next());

        case 9:
          if (!request.nextUrl.pathname.startsWith('/login')) {
            _context.next = 13;
            break;
          }

          if (!token) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.redirect(new URL('/panel', request.url)));

        case 12:
          return _context.abrupt("return", _server.NextResponse.next());

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

var config = {
  matcher: ['/panel/:path*', '/api/admin/:path*', '/login']
};
exports.config = config;