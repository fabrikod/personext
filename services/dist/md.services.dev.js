"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSettingsService = exports.getPablicationsService = exports.getArchives = exports.getReadJsonFileService = exports.getBlogJsonService = exports.getBlogByIdService = exports.getBlogBySlugService = exports.getUserService = exports.getBlogService = void 0;

var _mdFileAccess = require("@/dataAccess/mdFileAccess");

var _mdFileAccess2 = require("@/dataAccess/mdFileAccess/mdFileAccess");

var _helpers = require("@/helpers");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getBlogService = function getBlogService() {
  var blogs, jsonBlogs;
  return regeneratorRuntime.async(function getBlogService$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.getBlogsFilesData)());

        case 2:
          blogs = _context.sent;
          jsonBlogs = blogs.map(function (_ref) {
            var slug = _ref.slug,
                attributes = _ref.attributes;
            return {
              slug: slug,
              attributes: (0, _helpers.toObject)(attributes)
            };
          });
          return _context.abrupt("return", jsonBlogs);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getBlogService = getBlogService;

var getUserService = function getUserService() {
  var user, jsonUser;
  return regeneratorRuntime.async(function getUserService$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.getUserFileData)());

        case 2:
          user = _context2.sent;
          jsonUser = (0, _helpers.toObject)(user);
          jsonUser.fullName = "".concat(jsonUser.name, " ").concat(jsonUser.surname);
          return _context2.abrupt("return", jsonUser);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getUserService = getUserService;

var getBlogBySlugService = function getBlogBySlugService(slug) {
  var isBlog, blog, jsonBlog;
  return regeneratorRuntime.async(function getBlogBySlugService$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.readJsonFileData)());

        case 2:
          _context3.t0 = function (blog) {
            return !Boolean(blog.deletedAt);
          };

          _context3.t1 = function (_ref2) {
            var file = _ref2.file;
            return file.split('.md')[0] === slug;
          };

          isBlog = _context3.sent.filter(_context3.t0).findIndex(_context3.t1);

          if (!(isBlog === -1)) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", null);

        case 7:
          _context3.next = 9;
          return regeneratorRuntime.awrap((0, _mdFileAccess.getBlogBySlugData)(slug));

        case 9:
          blog = _context3.sent;
          jsonBlog = (0, _helpers.toObject)(blog);
          return _context3.abrupt("return", jsonBlog);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.getBlogBySlugService = getBlogBySlugService;

var getBlogByIdService = function getBlogByIdService(id) {
  var isBlog, blog, jsonBlog;
  return regeneratorRuntime.async(function getBlogByIdService$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.readJsonFileData)());

        case 2:
          _context4.t0 = function (blog) {
            return !Boolean(blog.deletedAt);
          };

          _context4.t1 = function (blog) {
            return blog.id === id;
          };

          isBlog = _context4.sent.filter(_context4.t0).find(_context4.t1);

          if (Boolean(isBlog)) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", null);

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap((0, _mdFileAccess2.getBlogByFileNameData)(isBlog.file));

        case 9:
          blog = _context4.sent;
          jsonBlog = (0, _helpers.toObject)(blog);
          return _context4.abrupt("return", jsonBlog);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.getBlogByIdService = getBlogByIdService;

var getBlogJsonService = function getBlogJsonService(_ref3) {
  var perpage, page, tag, data;
  return regeneratorRuntime.async(function getBlogJsonService$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          perpage = _ref3.perpage, page = _ref3.page, tag = _ref3.tag;
          _context5.next = 3;
          return regeneratorRuntime.awrap((0, _mdFileAccess.getBlogFileJsonData)({
            perpage: Number(perpage) || 4,
            page: Number(page) || 1,
            queryTag: tag
          }));

        case 3:
          data = _context5.sent;
          data.data = data.data.map(function (_ref4) {
            var attributes = _ref4.attributes;
            return (0, _helpers.toObject)(attributes);
          });
          data.data = data.data.map(function (blog) {
            return _objectSpread({}, blog, {
              content: !Boolean(blog.description) ? blog.content.length > 500 ? blog.content.substring(0, 500) : blog.content : blog.description
            });
          });
          return _context5.abrupt("return", data);

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.getBlogJsonService = getBlogJsonService;

var getReadJsonFileService = function getReadJsonFileService() {
  var blog;
  return regeneratorRuntime.async(function getReadJsonFileService$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.readJsonFileData)());

        case 2:
          blog = _context6.sent;
          return _context6.abrupt("return", blog);

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.getReadJsonFileService = getReadJsonFileService;

var getArchives = function getArchives() {
  var archives, groupedData, goodGruppedData, _i, _Object$entries, _Object$entries$_i, key, monthList;

  return regeneratorRuntime.async(function getArchives$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.readJsonFileData)());

        case 2:
          archives = _context7.sent;
          groupedData = {};
          archives.forEach(function (item) {
            var publishedAt = new Date(item.publishedAt);
            var year = publishedAt.getFullYear();
            var month = publishedAt.getMonth() + 1; // Months are 0-based, so add 1 to get the actual month.

            var day = publishedAt.getDay();

            if (!groupedData[year]) {
              groupedData[year] = {};
            }

            if (!groupedData[year][month]) {
              groupedData[year][month] = [];
            }

            groupedData[year][month].push(item);
          });
          goodGruppedData = [];

          for (_i = 0, _Object$entries = Object.entries(groupedData); _i < _Object$entries.length; _i++) {
            _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], monthList = _Object$entries$_i[1];
            goodGruppedData.push({
              year: key,
              monthList: Object.entries(monthList).reverse().map(function (month) {
                return {
                  month: month[0],
                  titleList: month[1].reverse().map(function (_ref5) {
                    var title = _ref5.title,
                        publishedAt = _ref5.publishedAt,
                        file = _ref5.file;
                    return {
                      title: title,
                      publishedAt: publishedAt,
                      slug: "/".concat(file.split('.')[0])
                    };
                  })
                };
              })
            });
          }

          return _context7.abrupt("return", goodGruppedData.reverse());

        case 8:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.getArchives = getArchives;

var getPablicationsService = function getPablicationsService(fields) {
  var publications, jsonPublications, name, data;
  return regeneratorRuntime.async(function getPablicationsService$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.getPulicationsFileData)());

        case 2:
          publications = _context8.sent;
          jsonPublications = (0, _helpers.toObject)(publications);

          if (!fields) {
            _context8.next = 9;
            break;
          }

          name = fields.name;
          data = name ? jsonPublications[name] : jsonPublications;
          data.length = 5;
          return _context8.abrupt("return", data);

        case 9:
          return _context8.abrupt("return", jsonPublications);

        case 10:
        case "end":
          return _context8.stop();
      }
    }
  });
};

exports.getPablicationsService = getPablicationsService;

var getSettingsService = function getSettingsService(settingName) {
  var settings, settingsJson;
  return regeneratorRuntime.async(function getSettingsService$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap((0, _mdFileAccess.getSettingsFileData)());

        case 2:
          settings = _context9.sent;
          settingsJson = (0, _helpers.toObject)(settings);
          return _context9.abrupt("return", settingName ? settingsJson[settingName] : settingsJson);

        case 5:
        case "end":
          return _context9.stop();
      }
    }
  });
};

exports.getSettingsService = getSettingsService;