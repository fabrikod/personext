"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _mdBlog = require("@/services/md.blog.service");

function handler(req, res) {
  var blog;
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _mdBlog.deletedBlogService)(req.body.slug));

        case 2:
          blog = _context.sent;
          res.status(200).json({
            data: blog
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}