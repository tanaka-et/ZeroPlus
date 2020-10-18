'use strict'



// ヘッダーから各コンテンツへ移動
$(function(){
    $('.header_link').click(
        function(){
            $("html,body").animate({ 
                scrollTop: $('#top').offset().top 
            },1000);
    })
    $('.header_feature').click(
        function(){
            $("html,body").animate({ 
                scrollTop: $('#feature').offset().top 
            },1000);
    })
    $('.header_curr').click(
        function(){
            $("html,body").animate({ 
                scrollTop: $('#curriculum').offset().top 
            },1000);
    })
    $('.header_lesson').click(
        function(){
            $("html,body").animate({ 
                scrollTop: $('#lesson').offset().top 
            },1000);
    })
    $('.header_qa').click(
        function(){
            $("html,body").animate({ 
                scrollTop: $('#qa').offset().top 
            },1000);
    })
    $('.header_contact').click(
        function(){
            $("html,body").animate({ 
                scrollTop: $('#contact_scroll').offset().top 
            },1000);
    })
    $('.header_access').click(
        function(){
            $("html,body").animate({ 
                scrollTop: $('#access').offset().top 
            },1000);
    })
    
});

// KVの無料相談ボタン
$('.kv-a').click(function (){
            $("html,body").animate({ 
                scrollTop: $('#contact_scroll').offset().top 
            },1000);
    });


// 無料相談ボタン
$(function () {
    let contact = $('#free_contact');

    contact.hide();

    $(window).scroll(function () {

        if ($(this).scrollTop() >  $(window).height()) {
            contact.fadeIn();
        } else {
            contact.fadeOut();
        }
    });
    contact.click(
        function(){
            $("html,body").animate({ 
                scrollTop: $('#contact_scroll').offset().top 
            },1000);
    })
});

// 1画面スクロールしたらヘッダー固定
let header = $('.header');
let headerA = $('.header-a');
let logoW = $('.logo_w');
let logoB = $('.logo_b');

$(window).scroll(function () {

    if ($(window).scrollTop() > $(window).height()) {
    header.addClass('fix');
    headerA.addClass('fix');
    logoW.addClass('fix');
    logoB.addClass('fix');
    } else {
    header.removeClass('fix');
    headerA.removeClass('fix');
    logoW.removeClass('fix');
    logoB.removeClass('fix');
    }
});


// 料金・レッスンのタブ
let tabLi = $('.tab li');
let tabContent = $('.tab-content');

$(function(){

    tabLi.click(function(){
        let num = tabLi.index(this);

        tabLi.removeClass('active');
        tabContent.removeClass('active');
        $(this).addClass('active');
        tabContent.eq(num).addClass('active');
    });
});

// スライド
$(window).scroll(function(){

    let scroll = $(window).scrollTop();
    let offset = $('.second-wrapper').offset().top;

    let winH = $(window).height();

    if ( scroll > offset - winH / 2 ) {
    $('.second-itemBox').addClass('in');
    }
});
