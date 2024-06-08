function tab() {
    $(".tab>ul>li ")

    .focus(function() {

        $(this).addClass('on').children('.accountarea').addClass('on');
        $(this).siblings('.tab>ul>li').removeClass('on').children(".accountarea").removeClass('on');
    })

}

function banner_title() {
    $(".tab>ul>li:nth-child(1) ")

    .focus(function() {

        $('.right_title2').addClass('on');
        $('.right_title').removeClass('on');
    })
    $(".tab>ul>li:nth-child(2) ")

    .focus(function() {

        $('.right_title').addClass('on');
        $('.right_title2').removeClass('on');
    })
}

$(function() {

    tab(); //登入專區tab
    banner_title(); //banner標題

});