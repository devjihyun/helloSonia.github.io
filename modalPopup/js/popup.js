"use strict";


(function () {
// 1단계 - 버튼 클릭시 레이어팝업이 뜨고, 팝업내의 닫기버튼이나 x를 클릭시 닫힙니다.

function showPopup () {
    var element = document.getElementById("modalframe");
    element.classList.add("show");
}
document.getElementById("clickBtn").addEventListener("click", showPopup);

function closePopup () {
    var element = document.getElementById("modalframe");
    element.classList.remove("show");
}
document.getElementById("closeBtn").addEventListener("click", closePopup);

})();