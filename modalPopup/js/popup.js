"use strict";

(function () {
var modal = document.getElementById("modalframe");

// 팝업 띄우기 함수 선언 
function showPopup () {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflowY = "hidden";
}

// 닫기 버튼 또는 외부 클릭시 팝업 닫기 함수 선언
function closePopup () {
    modal.classList.add("hide")
    setTimeout (function () {
        modal.classList.remove("show");
    },1000);
    
    document.body.style.overflowY = "scroll";
}

// 클릭 이벤트시 함수호출 
document.getElementById("clickBtn").addEventListener("click", showPopup);
document.getElementById("closeBtn").addEventListener("click", closePopup);
document.querySelector(".modal-layer").addEventListener("click", closePopup);

})();
