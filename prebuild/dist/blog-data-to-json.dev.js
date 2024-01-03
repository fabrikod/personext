"use strict";

var fs = require('fs').promises;

var path = require('path');

var yaml = function yaml(content) {
  var yaml = require('js-yaml');

  return yaml.load(content);
};

var getMetaDataBySortBlog = function getMetaDataBySortBlog() {
  var MAIN_MD_FILE_PATH, BLOG_FOLDER_PATH, blogMetaDataArray, files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, mdFilePath, fileStats, content, json;

  return regeneratorRuntime.async(function getMetaDataBySortBlog$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          MAIN_MD_FILE_PATH = "".concat(process.cwd(), "/data");
          BLOG_FOLDER_PATH = "".concat(MAIN_MD_FILE_PATH, "/blogs");
          blogMetaDataArray = [];
          _context.next = 5;
          return regeneratorRuntime.awrap(fs.readdir(BLOG_FOLDER_PATH));

        case 5:
          files = _context.sent;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 9;
          _iterator = files[Symbol.iterator]();

        case 11:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 26;
            break;
          }

          file = _step.value;

          if (!(path.extname(file) === '.md')) {
            _context.next = 23;
            break;
          }

          mdFilePath = path.join(BLOG_FOLDER_PATH, file);
          _context.next = 17;
          return regeneratorRuntime.awrap(fs.stat(mdFilePath));

        case 17:
          fileStats = _context.sent;
          _context.next = 20;
          return regeneratorRuntime.awrap(fs.readFile(mdFilePath, 'utf8'));

        case 20:
          content = _context.sent;
          json = yaml(content);
          blogMetaDataArray.push({
            id: json.id,
            file: file,
            title: json.title,
            createdAt: fileStats.birthtime,
            publishedAt: new Date(json.publishedAt),
            // deletedAt: json.deletedAt || '',
            listVisible: json.listVisible,
            tags: json.tags || []
          });

        case 23:
          _iteratorNormalCompletion = true;
          _context.next = 11;
          break;

        case 26:
          _context.next = 32;
          break;

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](9);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 32:
          _context.prev = 32;
          _context.prev = 33;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 35:
          _context.prev = 35;

          if (!_didIteratorError) {
            _context.next = 38;
            break;
          }

          throw _iteratorError;

        case 38:
          return _context.finish(35);

        case 39:
          return _context.finish(32);

        case 40:
          blogMetaDataArray.sort(function (first, last) {
            return new Date(last.publishedAt) - new Date(first.publishedAt);
          });
          _context.next = 43;
          return regeneratorRuntime.awrap(fs.writeFile("".concat(process.cwd(), "/data/blogs.json"), JSON.stringify(blogMetaDataArray, null, 2), function (err) {
            if (err) {
              console.error('JSON file write error:', err);
              return;
            }
          }));

        case 43:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[9, 28, 32, 40], [33,, 35, 39]]);
};

getMetaDataBySortBlog();