"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlogUpdate = exports.deletedBlogService = void 0;

var _columns = require("@/constrait/columns");

var _mdFileAccess = require("@/dataAccess/mdFileAccess/mdFileAccess");

var _valid = require("@/helpers/valid");

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

var getBlogUpdate = function getBlogUpdate(blogData) {
  var isValid, updateBlog;
  return regeneratorRuntime.async(function getBlogUpdate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          isValid = (0, _valid.blogValid)(_columns.BLOG, Object.keys(blogData.data));

          if (isValid) {
            _context2.next = 3;
            break;
          }

          throw Error('incorrect column');

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap((0, _mdFileAccess.updateBlogFile)(blogData.data));

        case 5:
          updateBlog = _context2.sent;
          return _context2.abrupt("return", updateBlog);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getBlogUpdate = getBlogUpdate;