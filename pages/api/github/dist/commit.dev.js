"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var fs = require('fs').promises;

var path = require('path');

function handler(req, res) {
  var files, files2, files3;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('111111111', process.cwd());
          _context.next = 3;
          return regeneratorRuntime.awrap(fs.readdir(process.cwd()));

        case 3:
          files = _context.sent;
          console.log('222222222', process.cwd(), files);
          _context.next = 7;
          return regeneratorRuntime.awrap(fs.readdir(path.join("".concat(process.cwd()), 'data')));

        case 7:
          files2 = _context.sent;
          console.log('3333333333', path.join("".concat(process.cwd()), 'data'), files2);
          _context.next = 11;
          return regeneratorRuntime.awrap(fs.readdir(path.join("".concat(process.cwd()), '../../')));

        case 11:
          files3 = _context.sent;
          console.log('44444444444', path.join("".concat(process.cwd()), 'data'), files3);
          res.status(200).json({
            data: 'test'
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
}