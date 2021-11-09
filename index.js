/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP938769";
}

function fn() {
    return "Ryan";
}

function sn() {
    return "Harris";
}

// add your functions here

/* Create a function replaceText which accepts two parameters: an element and a string. The function should set the content of the given element to the given string.
 * 
 * Need 2 parameters: elem, str (element, string)
 * Content of elem = str
 */
function replaceText (elem, str){
  elem.textContent = str;
}

/* Create a function addTextTo which gets two parameters: an element and a string. The function should append the given string to the content of the given element.
 * 
 * Need 2 parameters: elem, str
 * Content of str = elem
 */
function addTextTo (elem, str){
  let para = document.getElementById(elem);
  let text = document.createTextNode(str);

  para.appendChild(text);
}
