"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var login = function login(_ref) {
  var username, password, CryptoJS, envPassword, envUsername, envSecretKey, hashedInput;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          username = _ref.username, password = _ref.password;
          CryptoJS = require('crypto-js');
          envPassword = process.env.NEXT_PUBLIC_PASSWORD;
          envUsername = process.env.NEXT_PUBLIC_USERNAME;
          envSecretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
          hashedInput = CryptoJS.HmacSHA256(password, envSecretKey).toString();

          if (!(envUsername === username && hashedInput === envPassword)) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", true);

        case 8:
          return _context.abrupt("return", false);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.login = login;