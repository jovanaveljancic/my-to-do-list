"use strict";
var form = document.getElementById("todo-form");

function getInput(event) {
    event.preventDefault();
    var input = document.getElementById("todo").value;
    if (input == "" || input == null) {
        return;
    }
    form.reset();

    // Create a new list item
    var litem = document.createElement('li');
    litem.innerHTML = input;

    // Create a "close" button and append it to each list item
    var close = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    close.className = "close";
    close.appendChild(txt);
    litem.appendChild(close);

    //Click on a "close" button to remove list item
    close.onclick = function () {
        this.parentNode.remove();
    };

    // Add list item to the list
    document.getElementById('update').appendChild(litem);
}
    form.addEventListener("submit", getInput, false);

    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);