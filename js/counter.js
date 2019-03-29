"use strict";

(function () {
    var count = document.getElementById("count");
    var num = 0;
    
    document.getElementById("count").value = num;

    // +버튼 클릭 시 1씩 증가
    document.getElementById("btnPlus").addEventListener("click", function plus() {
        num++;
        count.value = num;
    });

    // - 버튼 클릭 시 1씩 감소
    document.getElementById("btnMinus").addEventListener("click", function minus() {
        num--;
        count.value = num;
    });
})();


// 키보드 입력 방지
function putNumber(event) {
    event.preventDefault();
}
// 숫자만 입력되게 하기
function putNumber(event) {
    var code = event.keyCode || event.which;
    if (code > 47 && code < 58) {} else if (code === 8) {
        return;
    } else
        event.preventDefault();
}