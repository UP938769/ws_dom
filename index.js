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
  elem.textContent += str;
}

/* Create a function `moreBears` that replaces the default image with the image of a bear.  Your function should (for the 'animals' element) set its source URL to 'http://placebear.com/400/200', its alternative text to 'A bear.', and its title to 'A BEAR!'.
 * 
 * Replace image with new image
 * Look for the 'animals' element
 * Set URL to one provided
 * Set alternative text to 'A bear.'
 * Set title to 'A BEAR!'
 */
function moreBears(){
  document.getElementById("animals").src = "http://placebear.com/400/200";
  document.getElementById("animals").alt = "A bear.";
  document.getElementById("animals").title = "A BEAR!";
}

/* Create a function `setId` with two parameters, an element and a string. The function will set the element's ID to the given string. The return value of the function must be the given element.
 * 
 * parameters: element, string
 * element = elem
 * string = str
 * 
 * Set elem ID to str
 * Return elem
 */
function setId(elem, str){
  elem.id = str;
  return elem;
}

/* Create a function `setClass` with two parameters, an element and a string. The function will set the element's class to the given string. The return value of the function must be the given element.
 * 
 * parameters: element, string
 * element = elem
 * string = str
 * Set elem's class to str
 * Return elem
 */
function setClass(elem, str){
  elem.className = str;
  return elem;
}

/* Create a function `addAClass` with two parameters, an element and a string. The function will add the given string's value to the element's classes. The return value of the function must be the given element.
 * 
 * parameters: element, string
 * element = elem
 * string = str
 * Add the value of str to elem's class(es)
 * Return elem
 */
function addAClass(elem, str){
  elem.classList.add(str);
  return elem;
}

/* Create a function `removeAClass` with two parameters, an element and a string. The function will remove the given string's value from the element's classes. The return value of the function must be the given element.
 * 
 * parameters: element, string
 * element = elem
 * string = str
 * Remove the value of str from elem's class(es)
 * Return elem
 */
function removeAClass(elem, str){
  elem.classList.remove(str);
  return elem;
}

/* Write a function `newElement` which, given one parameter called name, returns a newly created element with that tag name.
 * 
 * parameter: name
 * Return a new element with "name" as it's name
 */
function newElement(name){
  let elem = document.createElement(name);
  return elem;
}

/* Create a function `findElementById` which, given one parameter called ID, returns the element that has that id.
 * 
 * parameter: ID
 * Return the element that has the same id and "ID"
 */
function findElementById(ID){
  const elem = document.getElementById(ID);
  return elem;
}

/* Create a function `findElementsByQuery` which, given one parameter called query, returns all the elements that match the query selector in that parameter.
 * 
 * 
 */
function findElementsByQuery(){

}
