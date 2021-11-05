// 햄버거 사이드 쇼업 메뉴
function openNav(){
    $("#leftMenu").addClass("showLeftMenu");
}

function closeNav(){
    $("#leftMenu").removeClass("showLeftMenu")
}

// 오른쪽 location 사이드 쇼업 메뉴
function openNav2(){
    $("#rightMenu").addClass("showRightMenu");
}

function closeNav2(){
    $("#rightMenu").removeClass("showRightMenu")
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