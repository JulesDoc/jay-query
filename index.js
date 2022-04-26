/* eslint-disable linebreak-style */
'use strict';

function J$ (selector) {
  return Object.assign(document.querySelectorAll(selector), methods);
}

J$.ready = function (func) {
  document.addEventListener('DOMContentLoaded', func);
};

// Allow tests to run on the server (leave at the bottom)
if (typeof window === 'undefined') {
  module.exports = J$;
}
