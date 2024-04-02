"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileToBase64 = exports.textToBase64 = exports.toYaml = exports.toObject = exports.slug = void 0;

var fs = require('fs');

var jsyaml = require('js-yaml');

var slug = function slug(url) {
  return url.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').trim();
};

exports.slug = slug;

var toObject = function toObject(content) {
  return jsyaml.load(content);
};

exports.toObject = toObject;

var toYaml = function toYaml(content) {
  return jsyaml.dump(content);
};

exports.toYaml = toYaml;

var getFileContent = function getFileContent(path) {
  return fs.readFileSync("".concat(process.cwd(), "/data/").concat(path), 'utf-8');
};

var textToBase64 = function textToBase64(content) {
  return Buffer.from(content).toString('base64');
};

exports.textToBase64 = textToBase64;

var fileToBase64 = function fileToBase64(file) {
  return regeneratorRuntime.async(function fileToBase64$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", fs.readFileSync(file, 'base64'));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.fileToBase64 = fileToBase64;