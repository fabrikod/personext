"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

function handler(req, res) {
  var files, files2;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('111111111', process.cwd());
          _context.next = 3;
          return regeneratorRuntime.awrap(fs.readdir(process.cwd()));

        case 3:
          files = _context.sent;
          console.log('222222222', files);
          _context.next = 7;
          return regeneratorRuntime.awrap(fs.readdir("".concat(process.cwd(), "/../")));

        case 7:
          files2 = _context.sent;
          console.log('3333333333', files);
          res.status(200).json({
            data: 'test'
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}