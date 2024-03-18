"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MENUS = exports.BLOG_IMAGES = exports.JSON_STACK_PATH = exports.JSON_BLOG_PATH = exports.MAIN_MD_FILE_PATH = exports.BLOG_FOLDER_PATH = void 0;
var MAIN_MD_FILE_PATH = "".concat(process.cwd(), "/data");
exports.MAIN_MD_FILE_PATH = MAIN_MD_FILE_PATH;
var JSON_BLOG_PATH = "".concat(MAIN_MD_FILE_PATH, "/blogs.json");
exports.JSON_BLOG_PATH = JSON_BLOG_PATH;
var JSON_STACK_PATH = "".concat(MAIN_MD_FILE_PATH, "/stack.json");
exports.JSON_STACK_PATH = JSON_STACK_PATH;
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