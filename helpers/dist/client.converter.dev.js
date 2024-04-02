"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSlug = void 0;

var parseSlug = function parseSlug(text) {
  var turkishChars = {
    ç: 'c',
    ğ: 'g',
    ı: 'i',
    ö: 'o',
    ş: 's',
    ü: 'u',
    Ç: 'C',
    Ğ: 'G',
    İ: 'I',
    Ö: 'O',
    Ş: 'S',
    Ü: 'U'
  };
  var slug = text.replace(/ç|ğ|ı|ö|ş|ü|Ç|Ğ|İ|Ö|Ş|Ü/g, function (match) {
    return turkishChars[match];
  }).toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  return slug;
};

exports.parseSlug = parseSlug;