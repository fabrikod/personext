"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;
exports.config = void 0;

var _converters = require("@/helpers/converters");

var _mdBlog = require("@/services/md.blog.service");

var _formidable = require("formidable");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var config = {
  api: {
    bodyParser: false
  }
};
exports.config = config;

function parseData(req) {
  return new Promise(function (resolve, reject) {
    var form = new _formidable.Formidable({
      multiples: true
    });
    form.parse(req, function _callee(err, fields, files) {
      var newFields, _i, _Object$entries, _Object$entries$_i, key, value, _i2, _Object$entries2, _Object$entries2$_i, _key, _value, base64Image, mimtype;

      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (err) reject({
                err: err
              });
              newFields = {};

              for (_i = 0, _Object$entries = Object.entries(fields); _i < _Object$entries.length; _i++) {
                _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                newFields[key] = value[0];
              } // const newFiles = {}


              _i2 = 0, _Object$entries2 = Object.entries(files);

            case 4:
              if (!(_i2 < _Object$entries2.length)) {
                _context.next = 14;
                break;
              }

              _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), _key = _Object$entries2$_i[0], _value = _Object$entries2$_i[1];
              _context.next = 8;
              return regeneratorRuntime.awrap((0, _converters.fileToBase64)(_value[0].filepath));

            case 8:
              base64Image = _context.sent;
              mimtype = _value[0].mimetype.split('/')[1];
              newFields[_key] = {
                data: base64Image,
                mimetype: mimtype
              };

            case 11:
              _i2++;
              _context.next = 4;
              break;

            case 14:
              resolve({
                err: err,
                data: newFields
              }); // resolve({ err, fields: newFields, files: newFiles })

            case 15:
            case "end":
              return _context.stop();
          }
        }
      });
    });
  });
}

function handler(req, res) {
  var data, blog;
  return regeneratorRuntime.async(function handler$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(parseData(req));

        case 2:
          data = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap((0, _mdBlog.createBlogService)(data));

        case 5:
          blog = _context2.sent;
          res.status(200).json();

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}