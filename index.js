/* eslint-disable linebreak-style */
'use strict';
var allMethods = {};

function J$ (selector) {
  var allElements = document.querySelectorAll(selector);

  allMethods.addClass = function addClass (className) {
    allElements.forEach((x) => x.classList.add(className));
    return this;
  };

  allMethods.removeClass = function removeClass (className) {
    allElements.forEach((x) => x.classList.remove(className));
    return this;
  };

  allMethods.toggleClass = function toggleClass (className) {
    allElements.forEach((x) => {
      if (x.classList.contains(className)) {
        x.classList.remove(className);
        return this;
      } else {x.classList.add(className);
        return this;
      }
    });
    return this;
  };

  allMethods.hide = function hide () {
    allElements.forEach((x) => x.style.display = 'none');
    return this;
  };

  allMethods.show = function show () {
    allElements.forEach((x) => {
      if (x.style.display != 'visible') {
        x.style.display = 'inline';
        return this;
      }
      else if (x.style.display === 'visible' ||  x.style.visibility === 'visible') return this;
    });
  };



  const resultObj = Object.assign(allElements, allMethods);
  return resultObj;
}

J$.ready = function ready (handler) {
  document.addEventListener('DOMContentLoaded', handler);
};
// Allow tests to run on the server (leave at the bottom)
if (typeof window === 'undefined') {
  module.exports = J$;
}
