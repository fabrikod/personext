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
          console.log('11111111111');
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _jwt.getToken)({
            req: request,
            secret: process.env.SECRET
          }));

        case 3:
          token = _context.sent;
          console.log('22222222222', token);
          console.log('3333333333', process.env.SECRET);

          if (!request.nextUrl.pathname.startsWith('/panel')) {
            _context.next = 10;
            break;
          }

          if (!!token) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.redirect(new URL('/login', request.url)));

        case 9:
          return _context.abrupt("return", _server.NextResponse.next());

        case 10:
          if (!request.nextUrl.pathname.startsWith('/api/admin')) {
            _context.next = 14;
            break;
          }

          if (!!token) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", new _server.NextResponse('Unauthorized', {
            status: 401
          }));

        case 13:
          return _context.abrupt("return", _server.NextResponse.next());

        case 14:
          if (!request.nextUrl.pathname.startsWith('/login')) {
            _context.next = 18;
            break;
          }

          if (!token) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.redirect(new URL('/panel', request.url)));

        case 17:
          return _context.abrupt("return", _server.NextResponse.next());

        case 18:
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