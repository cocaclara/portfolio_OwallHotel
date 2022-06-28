'use strict';

$(document).ready(function(){
  // 스크롤 내릴 시, pc->네비게이션 sticky 효과 & 배경컬러 바뀜
    //태블릿->.gnb는 .active 클래스 제거(사라짐) & 메뉴바 생성
  var nav_offset = $('nav').offset();   // nav 위치 파악

  $(window).scroll(function(){
    if ( $(document).scrollTop() > nav_offset.top ) {
      $('nav.pc').addClass('sticky');
      $('.header_logo').addClass('sticky');
      $('nav.tablet .gnb.active').removeClass('active');
      $('.tablet.mo-menu-bar').stop().fadeIn(500);
    }else{
      $('nav.pc').removeClass('sticky');
      $('.header_logo').removeClass('sticky');
      $('nav.tablet .gnb').addClass('active');
      $('.tablet.mo-menu-bar').hide();
    }
    

    var sec2_offset = $('.sec2').offset();   // sec1 끝 위치 파악
    var logo_width = $('img.header_logo').innerWidth(); // 로고 width(240px)로 모바일버전 구분하기
    // console.log(logo_width);
    if(logo_width == 240){
      // 모바일 버전일 때 태블릭 메뉴바 보이는 현상 제거
      $('.tablet.mo-menu-bar').hide();

      // 모바일 --> sec1지날 때 로고+메뉴바 컬러 변경(사진 바꿈)
      if( $(document).scrollTop() > sec2_offset.top ){
        $('.header_logo').attr('src','img/logo_br.png');
        $('.mo-menu-bar').css('color','#937549');
      }else{
        $('.header_logo').attr('src','img/logo_w.png');
        $('.mo-menu-bar').css('color','#fff');
      }
    }
  });


  // 태블릿 -> 메뉴바 클릭시 네비게이션 보임(active클래스 추가)
  $('.tablet.mo-menu-bar').click(function(){
    $(this).hide();
    $('nav .gnb').addClass('active'); 
  });


  // 모바일 -> 메뉴바 클릭시 네비 밀려오면서 메뉴바 사라지고 닫기버튼 생성
  $('.mobile.mo-menu-bar').click(function(){
    $(this).css('opacity','0');
    $('nav.mobile').css('right','0');
    $('.mobile.mo-close-btn').css('right','3%');  
  });

  // 모바일 -> 닫기버튼 클릭시 네비와 함꼐 밖으로 나가면서 메뉴바 페이드인
  $('.mobile.mo-close-btn').click(function(){
    $('.mo-menu-bar').stop().delay(500).css('opacity','1');
    $(this).css('right','-100%');
    $('nav.mobile').css('right','-100%');
  });

  //gnb li 마우스 오버 시, lnb 나옴
  $('.gnb li').mouseover(function(){
    $(this).find('.lnb li').stop().slideDown();
  });
  $('.gnb li').mouseout(function(){
    $(this).find('.lnb li').stop().slideUp();
  });


});

