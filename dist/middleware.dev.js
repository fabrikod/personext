"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middleware = middleware;
exports.config = void 0;

var _server = require("next/server");

var _jwt = require("next-auth/jwt");

function middleware(request) {
  var token;
  return regeneratorRuntime.async(function middleware$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _jwt.getToken)({
            req: request,
            secret: process.env.SECRET
          }));

        case 2:
          token = _context.sent;

          if (!request.nextUrl.pathname.startsWith('/panel')) {
            _context.next = 7;
            break;
          }

          if (!!token) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.redirect(new URL('/login', request.url)));

        case 6:
          return _context.abrupt("return", _server.NextResponse.next());

        case 7:
          if (!request.nextUrl.pathname.startsWith('/api/admin')) {
            _context.next = 11;
            break;
          }

          if (!!token) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", new _server.NextResponse('Unauthorized', {
            status: 401
          }));

        case 10:
          return _context.abrupt("return", _server.NextResponse.next());

        case 11:
          if (!request.nextUrl.pathname.startsWith('/login')) {
            _context.next = 15;
            break;
          }

          if (!token) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.redirect(new URL('/panel', request.url)));

        case 14:
          return _context.abrupt("return", _server.NextResponse.next());

        case 15:
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