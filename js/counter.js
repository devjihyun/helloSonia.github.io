"use strict";

(function () {
    var count = document.getElementById("count");
    var i = count.value;

    // +버튼 클릭 시 1씩 증가
    document.getElementById("btnPlus").addEventListener("click", function () {
        i++;
        count.value = i;
    });

    // - 버튼 클릭 시 1씩 감소
    document.getElementById("btnMinus").addEventListener("click", function () {
        i--;
        count.value = i;
    });
})();


 // 숫자만 입력되게 하기
 function putNumber(event) {
    var code = event.keyCode || event.which;
    if (code > 47 && code < 58) {
        return;
    } 
    if (code === 8) {
        return;
    } 
    event.preventDefault();
}