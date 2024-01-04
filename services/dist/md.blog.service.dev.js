"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlogUpdate = exports.deletedBlogService = void 0;

var _columns = require("@/constrait/columns");

var _mdFileAccess = require("@/dataAccess/mdFileAccess/mdFileAccess");

var _helpers = require("@/helpers");

var _valid = require("@/helpers/valid");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var deletedBlogService = function deletedBlogService(id) {
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
            return blog.id === id;
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
  var isValid, jsonBlogs, isBlogIndex, blogIndex, fileName, blog, jsonBlog, newJsonBlog, updateBlog;
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
          return regeneratorRuntime.awrap((0, _mdFileAccess.readJsonFileData)());

        case 5:
          jsonBlogs = _context2.sent;
          isBlogIndex = jsonBlogs.findIndex(function (blog) {
            return blog.file === "".concat(blogData.data.slug.split('/')[1], ".md");
          });

          if (!(isBlogIndex !== -1)) {
            _context2.next = 9;
            break;
          }

          throw Error('slug value must be unic');

        case 9:
          blogIndex = jsonBlogs.findIndex(function (blog) {
            return blog.id === blogData.data.id;
          });
          fileName = jsonBlogs[blogIndex].file;
          jsonBlogs[blogIndex] = _objectSpread({}, jsonBlogs[blogIndex], {
            title: blogData.data.title,
            file: "".concat(blogData.data.slug.split('/')[1], ".md") // publishedAt: blogData.data.publishedAt,
            // listVisible: blogData.data.listVisible,
            // tags: blogData.data.tags

          });
          _context2.next = 14;
          return regeneratorRuntime.awrap((0, _mdFileAccess.updatedBlogFile)(jsonBlogs));

        case 14:
          _context2.next = 16;
          return regeneratorRuntime.awrap((0, _mdFileAccess.getBlogBySlugData)(fileName));

        case 16:
          blog = _context2.sent;
          jsonBlog = (0, _helpers.toObject)(blog);
          newJsonBlog = Object.assign({}, jsonBlog, blogData.data);
          _context2.next = 21;
          return regeneratorRuntime.awrap((0, _mdFileAccess.updateBlogFile)(fileName, newJsonBlog));

        case 21:
          updateBlog = _context2.sent;
          return _context2.abrupt("return", updateBlog);

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getBlogUpdate = getBlogUpdate;