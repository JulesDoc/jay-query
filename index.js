/* eslint-disable linebreak-style */
'use strict';
const allMethods = {};

function J$ (selector) {
  const allElements = document.querySelectorAll(selector);

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
      } else {
        x.classList.add(className);
        return this;
      }
    });
    return this;
  };

  allMethods.hide = function hide () {
    allElements.forEach((x) => { 
      const display = getComputedStyle(x).display;
      x.prevDisplay = display;
      x.style.display = 'none';
    });
    return this;
  };

  allMethods.show = function show () {
    allElements.forEach((x) => {
      const display = getComputedStyle(x).display;
      if (display === 'none') {
        x.style.display = x.prevDisplay || 'inline';
      }
    });
  };

  allMethods.toggle = function toggle () {
    allElements.forEach((x) => {
      const display = getComputedStyle(x).display;
      if (display === 'none') {
        allMethods.show.call(x);
      } else {
        allMethods.hide.call(x);
      }
    });
    return this;
  };

  allMethods.click = function click () {};
  allMethods.append = function append () {};
  allMethods.text = function text () {};

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
