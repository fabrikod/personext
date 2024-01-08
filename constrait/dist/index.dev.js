"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MENUS = exports.BLOG_IMAGES = exports.JSON_BLOG_PATH = exports.MAIN_MD_FILE_PATH = exports.BLOG_FOLDER_PATH = exports.DESCRIPTION_MAX_LENGTH = exports.CardType = void 0;
var CardType = Object.freeze({
  Profile: 'profile',
  FullText: 'fulltext',
  HalfText: 'halftext',
  FullImage: 'fullimage',
  Custom: 'custom'
});
exports.CardType = CardType;
var DESCRIPTION_MAX_LENGTH = 300;
exports.DESCRIPTION_MAX_LENGTH = DESCRIPTION_MAX_LENGTH;
var MAIN_MD_FILE_PATH = "".concat(process.cwd(), "/data");
exports.MAIN_MD_FILE_PATH = MAIN_MD_FILE_PATH;
var JSON_BLOG_PATH = "".concat(MAIN_MD_FILE_PATH, "/blogs.json");
exports.JSON_BLOG_PATH = JSON_BLOG_PATH;
var BLOG_FOLDER_PATH = "".concat(MAIN_MD_FILE_PATH, "/blogs");
exports.BLOG_FOLDER_PATH = BLOG_FOLDER_PATH;
var BLOG_IMAGES = "".concat(MAIN_MD_FILE_PATH, "/public/img/blogs");
exports.BLOG_IMAGES = BLOG_IMAGES;
var MENUS = [{
  text: 'Publications',
  href: '/#publications'
}, {
  text: 'Stacks',
  href: '/#stacks'
}, {
  text: 'Experiences',
  href: '/#experiences'
}, {
  text: 'Projects',
  href: '/#projects'
}, {
  text: 'Blogs',
  href: '/#blogs'
}, {
  text: 'Contact',
  href: '/#follow-me'
}];
exports.MENUS = MENUS;