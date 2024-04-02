"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fs = require('fs').promises;

var path = require('path');

var yaml = require('js-yaml');

var _require = require('uuid'),
    uuidv4 = _require.v4;

var MAIN_MD_FILE_PATH = "".concat(process.cwd(), "/../data");
var BLOG_FOLDER_PATH = "".concat(MAIN_MD_FILE_PATH, "/blogs");

var getMetaDataBySortBlog = function getMetaDataBySortBlog() {
  var files, index, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, mdFilePath, content, json, newJson;

  return regeneratorRuntime.async(function getMetaDataBySortBlog$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fs.readdir(BLOG_FOLDER_PATH));

        case 2:
          files = _context.sent;
          index = 0;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 7;
          _iterator = files[Symbol.iterator]();

        case 9:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 23;
            break;
          }

          file = _step.value;

          if (!(path.extname(file) === '.md')) {
            _context.next = 20;
            break;
          }

          mdFilePath = path.join(BLOG_FOLDER_PATH, file);
          _context.next = 15;
          return regeneratorRuntime.awrap(fs.readFile(mdFilePath, 'utf8'));

        case 15:
          content = _context.sent;
          json = yaml.load(content);
          newJson = _objectSpread({
            id: uuidv4()
          }, json);
          _context.next = 20;
          return regeneratorRuntime.awrap(fs.writeFile("".concat(BLOG_FOLDER_PATH, "/").concat(file), yaml.dump(newJson), function (err) {
            if (err) {
              console.error('JSON file write error:', err);
              return;
            }
          }));

        case 20:
          _iteratorNormalCompletion = true;
          _context.next = 9;
          break;

        case 23:
          _context.next = 29;
          break;

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](7);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 29:
          _context.prev = 29;
          _context.prev = 30;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 32:
          _context.prev = 32;

          if (!_didIteratorError) {
            _context.next = 35;
            break;
          }

          throw _iteratorError;

        case 35:
          return _context.finish(32);

        case 36:
          return _context.finish(29);

        case 37:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 25, 29, 37], [30,, 32, 36]]);
};

getMetaDataBySortBlog();