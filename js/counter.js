"use strict";

var minus = document.getElementById('btnMinus');
var plus = document.getElementById('btnPlus');
var i = 0;

// - 버튼 클릭시 1씩 하락
function numDown() {
    i--;
    document.getElementById('num').value = i;
}

// +버튼 클릭시 1씩 상승
function numUp() {
    i++;
    document.getElementById('num').value = i;
}

minus.addEventListener('click', numDown);
plus.addEventListener('click', numUp);


// 숫자만 입력되게 하기
function onlyNumber(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
        return;
    else
        return false;
}

function removeChar(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;
    if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
        return;
    else
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
}