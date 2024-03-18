"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReadJsonFileService = exports.getBlogJsonService = exports.getBlogByIdService = exports.getBlogBySlugService = exports.getBlogService = void 0;

var _mdFileAccess = require("@/dataAccess/mdFileAccess");

var _mdFileAccess2 = require("@/dataAccess/mdFileAccess/mdFileAccess");

var _helpers = require("@/helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getBlogService = function getBlogService() {
  var blogs, jsonBlogs;
  return regeneratorRuntime.async(function getBlogService$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.getBlogsFilesData)());

        case 2:
          blogs = _context.sent;
          jsonBlogs = blogs.map(function (_ref) {
            var slug = _ref.slug,
                attributes = _ref.attributes;
            return {
              slug: slug,
              attributes: (0, _helpers.toObject)(attributes)
            };
          });
          return _context.abrupt("return", jsonBlogs);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getBlogService = getBlogService;

var getBlogBySlugService = function getBlogBySlugService(slug) {
  var isBlog, blog, jsonBlog;
  return regeneratorRuntime.async(function getBlogBySlugService$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.readJsonFileData)());

        case 2:
          _context2.t0 = function (blog) {
            return !Boolean(blog.deletedAt);
          };

          _context2.t1 = function (_ref2) {
            var file = _ref2.file;
            return file.split('.md')[0] === slug;
          };

          isBlog = _context2.sent.filter(_context2.t0).findIndex(_context2.t1);

          if (!(isBlog === -1)) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", null);

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap((0, _mdFileAccess.getBlogBySlugData)(slug));

        case 9:
          blog = _context2.sent;
          jsonBlog = (0, _helpers.toObject)(blog);
          return _context2.abrupt("return", jsonBlog);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getBlogBySlugService = getBlogBySlugService;

var getBlogByIdService = function getBlogByIdService(id) {
  var isBlog, blog, jsonBlog;
  return regeneratorRuntime.async(function getBlogByIdService$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.readJsonFileData)());

        case 2:
          _context3.t0 = function (blog) {
            return !Boolean(blog.deletedAt);
          };

          _context3.t1 = function (blog) {
            return blog.id === id;
          };

          isBlog = _context3.sent.filter(_context3.t0).find(_context3.t1);

          if (Boolean(isBlog)) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", null);

        case 7:
          _context3.next = 9;
          return regeneratorRuntime.awrap((0, _mdFileAccess2.getBlogByFileNameData)(isBlog.file));

        case 9:
          blog = _context3.sent;
          jsonBlog = (0, _helpers.toObject)(blog);
          return _context3.abrupt("return", jsonBlog);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.getBlogByIdService = getBlogByIdService;

var getBlogJsonService = function getBlogJsonService(_ref3) {
  var perpage, page, tag, data;
  return regeneratorRuntime.async(function getBlogJsonService$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          perpage = _ref3.perpage, page = _ref3.page, tag = _ref3.tag;
          _context4.next = 3;
          return regeneratorRuntime.awrap((0, _mdFileAccess.getBlogFileJsonData)({
            perpage: Number(perpage) || 4,
            page: Number(page) || 1,
            queryTag: tag
          }));

        case 3:
          data = _context4.sent;
          data.data = data.data.map(function (_ref4) {
            var attributes = _ref4.attributes;
            return (0, _helpers.toObject)(attributes);
          });
          data.data = data.data.map(function (blog) {
            return _objectSpread({}, blog, {
              content: !Boolean(blog.description) ? blog.content.length > 500 ? blog.content.substring(0, 500) : blog.content : blog.description
            });
          });
          return _context4.abrupt("return", data);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.getBlogJsonService = getBlogJsonService;

var getReadJsonFileService = function getReadJsonFileService() {
  var blog;
  return regeneratorRuntime.async(function getReadJsonFileService$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.readJsonFileData)());

        case 2:
          blog = _context5.sent;
          return _context5.abrupt("return", blog);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.getReadJsonFileService = getReadJsonFileService;