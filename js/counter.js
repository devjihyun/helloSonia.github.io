"use strict";

var up = document.getElementById('btnUp');
var down = document.getElementById('btnDown');
var reset = document.getElementById('btnReset');
var numVal = document.getElementById('num').value;

function numUp() {
    document.getElementById('num').value = numVal++;
}
function numDown() {
    document.getElementById('num').value = numVal--;
}
function numReset() {
    document.getElementById('num').value = 0;
}


up.addEventListener('click', numUp);
down.addEventListener('click', numDown);
reset.addEventListener('click', numReset);




