"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBlogService = exports.updateBlogService = exports.deleteBlogService = void 0;

var _mdFileAccess = require("@/dataAccess/mdFileAccess/mdFileAccess");

var _helpers = require("@/helpers");

var _github = require("./github.service");

var _converters = require("@/helpers/converters");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('uuid'),
    uuidv4 = _require.v4;

var deleteBlogService = function deleteBlogService(id) {
  var jsonBlogs, blogIndex;
  return regeneratorRuntime.async(function deleteBlogService$(_context) {
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
          return regeneratorRuntime.awrap((0, _mdFileAccess.deleteBlogFile)(jsonBlogs));

        case 9:
          return _context.abrupt("return", slug);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.deleteBlogService = deleteBlogService;

var updateBlogService = function updateBlogService(blogData) {
  var jsonBlogs, isBlogIndex, newUpdateBlog, files, heroImageName, message;
  return regeneratorRuntime.async(function updateBlogService$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.readJsonFileData)());

        case 2:
          jsonBlogs = _context2.sent;
          isBlogIndex = jsonBlogs.findIndex(function (blog) {
            return blog.file === "".concat(blogData.data.slug, ".md") && blogData.data.id !== blog.id;
          });

          if (!(isBlogIndex !== -1)) {
            _context2.next = 6;
            break;
          }

          throw Error('slug value must be unic');

        case 6:
          newUpdateBlog = _objectSpread({}, jsonBlogs[isBlogIndex], {
            publishedAt: new Date(blogData.data.publishedAt).toISOString(),
            description: blogData.data.description,
            title: blogData.data.title,
            type: 'halftext',
            slug: blogData.data.slug,
            tags: [],
            content: blogData.data.content
          });
          files = [{
            path: 'data/blogs',
            name: "".concat(newUpdateBlog.slug, ".md"),
            content: (0, _converters.textToBase64)((0, _helpers.toYaml)(newUpdateBlog))
          }];

          if (blogData.data.image) {
            heroImageName = "".concat(uuidv4(), "-").concat(new Date().getTime(), ".").concat(blogData.data.image.mimetype);
            newUpdateBlog.image = "/img/blogs/".concat(heroImageName);
            files.push({
              path: 'public/img/blogs',
              name: heroImageName,
              content: blogData.data.image.data
            });
          }

          message = 'create ' + files.map(function (file) {
            return file.name;
          }).join(' ');
          (0, _github.githubMultipleFileService)(files, message);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.updateBlogService = updateBlogService;

var createBlogService = function createBlogService(blogData) {
  var jsonBlogs, isBlogIndex, newCreateBlog, files, heroImageName, message;
  return regeneratorRuntime.async(function createBlogService$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.readJsonFileData)());

        case 2:
          jsonBlogs = _context3.sent;
          isBlogIndex = jsonBlogs.findIndex(function (blog) {
            return blog.file === "".concat(blogData.data.slug, ".md");
          });

          if (!(isBlogIndex !== -1)) {
            _context3.next = 6;
            break;
          }

          throw Error('slug value must be unic');

        case 6:
          newCreateBlog = {
            id: uuidv4(),
            createdAt: new Date().toISOString(),
            publishedAt: new Date().toISOString(),
            description: blogData.data.description,
            title: blogData.data.title,
            type: 'halftext',
            slug: blogData.data.slug,
            tags: [],
            content: blogData.data.content
          };
          files = [{
            path: 'data/blogs',
            name: "".concat(newCreateBlog.slug, ".md"),
            content: (0, _converters.textToBase64)((0, _helpers.toYaml)(newCreateBlog))
          }];

          if (blogData.data.image) {
            heroImageName = "".concat(uuidv4(), "-").concat(new Date().getTime(), ".").concat(blogData.data.image.mimetype);
            newCreateBlog.image = "/img/blogs/".concat(heroImageName);
            files.push({
              path: 'public/img/blogs',
              name: heroImageName,
              content: blogData.data.image.data
            });
          }

          message = 'create ' + files.map(function (file) {
            return file.name;
          }).join(' ');
          (0, _github.githubMultipleFileService)(files, message); // const createBlog = await createBlogMdFile(newCreateBlog)
          // jsonBlogs.push({
          //   id: id,
          //   file: `${blogData.data.slug}.md`,
          //   title: blogData.data.title,
          //   createdAt: new Date().toISOString(),
          //   publishedAt: blogData.data.publishedAt,
          //   listVisible: blogData.data.listVisible || true,
          //   tags: blogData.data.tags || [],
          // })
          // jsonBlogs.sort(
          //   (first, last) => new Date(last.publishedAt) - new Date(first.publishedAt)
          // )
          // await updateBlogJsonFile(jsonBlogs)

          return _context3.abrupt("return", true);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.createBlogService = createBlogService;