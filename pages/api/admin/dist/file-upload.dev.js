"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

function handler(req, res) {
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.status(200).json({});

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}