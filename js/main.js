// 햄버거 메뉴
function openNav(){
    $("#leftMenu").addClass("showLeftMenu");
}

function closeNav(){
    $("#leftMenu").removeClass("showLeftMenu")
}



$(document).ready(function(){
    // {}안에는 속성값 - 기본적으로 변수, 오브젝트값(json)
    const swiper = new Swiper('.swiper-container', {
        direction:'horizontal',   // 수평
        slidePerView:1,
        spaceBetween:30,
        debugger:true,        //  드래그
        centeredSlides:true,
        loop: true,
        autoplay:{
            delay: 5000,
            disableOnInteraction : false,
        },

        pagination:{
            el:'.swiper-pagination',
            clickable:true,
        }
    });     
});