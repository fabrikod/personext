"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middleware = middleware;
exports.config = void 0;

var _server = require("next/server");

function middleware(request) {
  return regeneratorRuntime.async(function middleware$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!request.nextUrl.pathname.startsWith('/panel')) {
            _context.next = 4;
            break;
          }

          if (!!request.cookies.get('next-auth.session-token')) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.redirect(new URL('/login', request.url)));

        case 3:
          return _context.abrupt("return", _server.NextResponse.next());

        case 4:
          if (!request.nextUrl.pathname.startsWith('/api/admin')) {
            _context.next = 8;
            break;
          }

          if (!!request.cookies.get('next-auth.session-token')) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", new _server.NextResponse('Unauthorized', {
            status: 401
          }));

        case 7:
          return _context.abrupt("return", _server.NextResponse.next());

        case 8:
          if (!request.nextUrl.pathname.startsWith('/login')) {
            _context.next = 12;
            break;
          }

          if (!request.cookies.get('next-auth.session-token')) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.redirect(new URL('/panel', request.url)));

        case 11:
          return _context.abrupt("return", _server.NextResponse.next());

        case 12:
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