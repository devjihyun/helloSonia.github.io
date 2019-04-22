"use strict";

(function () {
    var inpCount = document.getElementById("inpNumCount");
    var countVal = 0;
    inpCount.value = countVal;

    inpCount.addEventListener("keyup", function(event) {
        validateNumber(event); /* 숫자만 입력되게 하는 함수 */
        countVal = Number(inpCount.value); /* 문자열 숫자열로 변경 */
        if (countVal !== 0) inpCount.value = countVal;
    });


    // +버튼 클릭 시 1씩 증가
    function increase () {
        countVal++;
        inpCount.value = countVal;
    }
    document.getElementById("btnPlus").addEventListener("click", increase);

    // - 버튼 클릭 시 1씩 감소
    function decrease () {
        countVal--;
        inpCount.value = countVal;
    }
    document.getElementById("btnMinus").addEventListener("click", decrease)
})();


// 숫자만 입력되게 하는 기능 함수
// if (code > 47 && code < 58) 방법과 차이점
// regex(정규표현식)에 대해 알아봅시다.
// 현재 이슈 : 마이너스도 삭제됩니다. 키키 
function validateNumber(event) {
    var code = event.keyCode || event.which;
    if (code == 8 || code == 46 || code == 37 || code == 39) return;
    else event.target.value = event.target.value.replace(/[^0-9-]/g, '');
}