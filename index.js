/* eslint-disable linebreak-style */
'use strict';
var allMethods = {};

function J$ (selector) {
  var allElements = document.querySelectorAll(selector);
  allMethods.addClass = function addClass (string) {
    allElements.forEach((x) => x.classList.add(string));
    return this;
  };

  allMethods.removeClass = function removeClass (string) {
    allElements.forEach((x) => x.classList.remove(string));
    return this;
  };

  allMethods.toggleClass = function toggleClass (string) {
    allElements.forEach((x) => {
      if (x.classList.contains(string)) {
        x.classList.remove(string);
        return this;
      } else {x.classList.add(string);
        return this;
      }
    });
    return this;
  };

  const resultObj = Object.assign(allElements, allMethods); // Object.assign(target, source)
  return resultObj;
}

J$.ready = function ready (handler) {
  document.addEventListener('DOMContentLoaded', handler);
};
// Allow tests to run on the server (leave at the bottom)
if (typeof window === 'undefined') {
  module.exports = J$;
}
