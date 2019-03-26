"use strict";

var num = 0;
var count = document.getElementById("count");

function plus(){
    num++;
    count.value = num;
}

function minus(){
    if (num > 0){
        num--;
        count.value = num;
    }
}
