"use strict";

var num = 0;
var count = document.getElementById("count");

function plus(){
    num++;
    count.value = num;
}

function minus(){
    num--;
    count.value = num;
}
