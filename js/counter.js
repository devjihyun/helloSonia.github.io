"use strict";

(function () {
    //step1. +,-버튼으로 인풋 박스의 숫자 변경하기
    var inpCount = document.getElementById("inpNumCount");
    var countVal = 0;
    inpCount.value = countVal;

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
    document.getElementById("btnMinus").addEventListener("click", decrease);
    
    //step2. 숫자 입력 및 입력 숫자 기준으로 버튼 제어
    inpCount.addEventListener("keyup", function(event) {
        countVal = Number(inpCount.value); /* 문자열 숫자열로 변경 */
        
        //ste3. 숫자만 입력되게 하기
        var code = event.keyCode || event.which;
        if (code == 8 || code == 46 || code == 37 || code == 39) return;
        else event.target.value = event.target.value.replace(/[^0-9-]/g, '');
    });
})();
