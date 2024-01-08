"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBase64 = exports.toYaml = exports.toObject = exports.slug = void 0;

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

var toBase64 = function toBase64(text) {
  return Buffer.from(text).toString('base64');
};

exports.toBase64 = toBase64;