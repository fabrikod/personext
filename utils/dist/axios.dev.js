"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiClient = _axios["default"].create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  var response = error.response;

  if (response) {
    console.error("Request failed with status code ".concat(response.status, ":"), error);
    throw error;
  } else {
    console.error('Network error:', error);
    throw new Error('Network error occurred. Please try again later.');
  }
});
var _default = apiClient;
exports["default"] = _default;