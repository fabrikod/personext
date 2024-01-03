"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletedBlogService = void 0;

var _mdFileAccess = require("@/dataAccess/mdFileAccess/mdFileAccess");

var deletedBlogService = function deletedBlogService(slug) {
  var jsonBlogs, blogIndex;
  return regeneratorRuntime.async(function deletedBlogService$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.readJsonFileData)());

        case 2:
          jsonBlogs = _context.sent;
          blogIndex = jsonBlogs.findIndex(function (blog) {
            return "/".concat(blog.file.split('.md')[0]) === slug;
          });

          if (!(blogIndex === -1)) {
            _context.next = 6;
            break;
          }

          throw 'not found slug';

        case 6:
          jsonBlogs[blogIndex].deletedAt = new Date().toISOString();
          _context.next = 9;
          return regeneratorRuntime.awrap((0, _mdFileAccess.deletedBlogFile)(jsonBlogs));

        case 9:
          return _context.abrupt("return", slug);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.deletedBlogService = deletedBlogService;