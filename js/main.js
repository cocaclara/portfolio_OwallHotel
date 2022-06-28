'use strict';

$(document).ready(function(){
  // .sec1 이미지 슬라이드
	$(".imgList li:gt(0)").hide();    //첫번째 빼고 다 hide
  setInterval(function(){
    $('.imgList li:first-child').fadeOut(2000).next().fadeIn(2000).end().appendTo(".imgList");
  },5000)
  
  // .sec2 (갤러리) 모바일 --> 터치 슬라이드 효과
  var $gallery = $('.gallery'),
      $img = $('.gallery li'),
      img_width = $img.width()+5,   // ul이 터치스와이프할 때 움직여야할 거리값(마진값 포함)
      img_length = $img.length;

  let move = img_width;   // 왼쪽으로 이동할 값
  let status = 'left side';   // 왼쪽 방향 설정

  // $(function(){
  $($gallery.find('ul')).swipe({
    swipe:function(event,direction,distance,duration,fingerCount,fingerData){

      // 오른쪽에서 왼쪽으로
      if( direction == 'left'){

        // 방향 전환할 때(만), move값이 img_width만큼 더 가야하므로 제어필요
        if(status == 'right side'){   // 현재 상태가 오른쪽 방향일 때
          status = 'left side';      // 왼쪽 방향(상태)로 바꾸기
          move += img_width;
          // console.log('status: ',status);
        }
        $(this).css('left',-move+'px');
        // $(this).css('backgroundColor','red');
        // console.log('left-move:',-move);

        if( -move ==  -img_width*(img_length) ){    // 마지막 사진까지 넘기고 한번 더 넘길 때
          $(this).css('left',-img_width*(img_length-1)+'px');   // 안넘어가고 멈추기
        }else{    // 마지막 사진까지 넘긴게 아니라면
          move += img_width;
        }
        // console.log('next move:',-move);
        
      // 왼쪽에서 오른쪽으로
      }else if( direction == 'right' ){
        // console.log('현재move값:', -move);
        // 방향 전환할 때(만), move값이 img_width만큼 더 가야하므로 제어필요
        if(status == 'left side' && -move !== -img_width*(img_length) || status == 'left side' && -move !== -img_width*(img_length-1) ){   // 현재 상태가 왼쪽 방향이면서 마지막사진이 아닐 때
          status = 'right side';      // 오른쪽 방향(상태)로 바꾸기
          move -= img_width;
          // console.log('status: ',status);
        }else if( status == 'left side' && -move == -img_width*(img_length)){    // 마지막 이미지일 때,
          status = 'right side';
          // console.log('status: ',status);
        }

        if( move == 0 ){    // 첫 이미지가 보여지면, 더이상 못가게 제어
          $(this).css('left','0px');
        }else{    // 첫 이미지가 아니라면,
          move -= img_width;
        }
          $(this).css('left', -move +'px');
          // $(this).css('backgroundColor','blue');
          // console.log('right-move:', -move);
      }
    }, 
    threshold: 0
  });


  // $(this)는 터치슬라이드이벤트를 사용하고자 하는 대상
  // swipe:function에 있는 값들은
  // event : 이벤트
  // direction : 방향(left, right, up, down등)
  // distance : 터치 이동거리 ( 0 ~ )
  // duration : 터치한 시간 ( 0부터 )
  // fingerCount : 터치한 손가락갯수 ( 0부터 )
  // fingerData : 터치한 손가락의 좌표라고는 하는데 확인하진 못했다.
  // threshold:0  : threshold값을 0으로 준이유는 1px만 움직여도 작동하도록 하기 위해서 이다.
  // ( 기본이 75px로 잡혀있어서 저 값을 안 넣으면 75px보다 덜 움직이면 작동하지 않는다. )

  //+++++++++++++++++++++++++++++++++++++++++++++++++++//
  
  // .sec3 예약날짜 버튼(클릭 시 오픈)
  $('.check_availability button').click(function(){
    $('.booking_area').slideDown(1000);
    $(this).parent().slideUp(1000);

    $('footer').addClass('hide'); //모바일 버전만
  });
  // 모바일버전 --> 예약화면 닫기버튼
  $('.booking_close_btn').click(function(){
    $('.check_availability').slideDown(1000);
    $('.booking_area').slideUp(1000);
    $('footer').removeClass('hide');
  });

  //+++++++++++++++++++++++++++++++++++++++++++++++++++

  // ROOM & GUEST
   // 소아 마우스오버 시, 나이제한 안내
  $('.child ion-icon').mouseover(function(){
    $('.child img').show();
  });
  $('.child ion-icon').mouseout(function(){
    $('.child img').hide();
  });

  // 객실,성인,소아 인원수 제한
    // 객실
  $('.room .plus').click(function(){
    var num_room = $('.room .num').html();

    if( num_room < 8 ){   // 객실 최대 8개
      num_room++;
      $('.room .num').text(num_room);
    }
  });
  $('.room .minus').click(function(){
    var num_room = $('.room .num').html();

    if( num_room > 1 ){   // 객실 최대 1개
      num_room--;
      $('.room .num').text(num_room);
    }
  });
    // 성인
  $('.adult .plus').click(function(){
    var num_adult = $('.adult .num').html();

    if ( num_adult < 2 ){   // 성인 최대 2명
      num_adult++;
      $('.adult .num').text(num_adult);
    }
  });
  $('.adult .minus').click(function(){
    var num_adult = $('.adult .num').html();

    if ( num_adult > 1 ){   // 성인 최대 2명
      num_adult--;
      $('.adult .num').text(num_adult);
    }
  });
    // 소아
  $('.child .plus').click(function(){
    var num_child = $('.child .num').html();
    
    if ( num_child < 3 ){   // 소아 최대 3명
      num_child++;
      $('.child .num').text(num_child);
    }
  });
  $('.child .minus').click(function(){
    var num_child = $('.child .num').html();
    
    if ( num_child > 0 ){   // 소아 최대 3명
      num_child--;
      $('.child .num').html(num_child);
    }
  });

  //+++++++++++++반응형 표시+++++++++++++
  //@media (max-width: 459px) 일 때, .child img src변경
  if(matchMedia("screen and (max-width: 459px)").matches){
    $('.child img').attr('src','img/tip2.png');
  }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // 캘린더(booking) pignose.calendar.full.min 플러그인 사용
  
  $('.pignose-calendar.pignose-calendar-light.pignose-calendar-default').append(`<div class="pignose-calendar-button-group"><a href="#" class="pignose-calendar-button pignose-calendar-button-cancel">Cancel</a><a href="#" class="pignose-calendar-button pignose-calendar-button-apply">OK</a></div>`);

  $(function() {
    $('.calendar').pignoseCalendar({
      multiple: true
    });

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    function onSelectHandler(date, context) {
      var $element = context.element;
      var $calendar = context.calendar;
      var $box = $element.siblings('.box').show();
      var text = 'You selected date ';

      if (date[0] !== null) {
          text += date[0].format('YYYY-MM-DD');
      }

      if (date[0] !== null && date[1] !== null) {
          text += ' ~ ';
      }
      else if (date[0] === null && date[1] == null) {
          text += 'nothing';
      }

      if (date[1] !== null) {
          text += date[1].format('YYYY-MM-DD');
      }

      $box.text(text);
    }

    function onApplyHandler(date, context) {
      var $element = context.element;
      var $calendar = context.calendar;
      var $box = $element.siblings('.box').show();
      var text = 'You applied date ';

      if (date[0] !== null) {
          text += date[0].format('YYYY-MM-DD');
      }

      if (date[0] !== null && date[1] !== null) {
          text += ' ~ ';
      }
      else if (date[0] === null && date[1] == null) {
          text += 'nothing';
      }

      if (date[1] !== null) {
          text += date[1].format('YYYY-MM-DD');
      }

      $box.text(text);
  }


    // .sec3 - pc/tablet
    $('.multi-select-calendar').pignoseCalendar({
        multiple: true,
        select: onSelectHandler,
        minDate: moment().format("YYYY-MM-DD")      // 지난날짜 선택 못함
    });
    // .sec3 - mobile
    // $('.input-calendar').pignoseCalendar({
    //   apply: onApplyHandler,
    //   format: 'YYYY-MM-DD',
    //   buttons: true
    // });
  });

  // 모바일 --> datepicker
  var dateFormat = 'yy-mm-dd'
  var $start = $('#startDate').datepicker({  // 시작일
    dateFormat : 'yy-mm-dd',
    minDate : +0, // 오늘 날짜 이전 선택 불가
    autoclose : true
  }).on('change',function(){
    // 시작일 datepicker가 닫힐 때, 종료일의 선택할 수 있는 최소날짜를 선택한 시작일로 지정
    $end.datepicker('option','minDate',getDate(this)); // 종료일 = 시작일+1
  });

  var $end = $('#endDate').datepicker({  // 종료일
    dateFormat : 'yy-mm-dd',
    minDate : +1,
    autoclose : true
  }).on('change',function(){
    // 종료일 datepicker가 닫힐 때, 시작일의 선책할 수 있는 최대날짜를 선택한 종료일로 지정
    $start.datepicker('option','maxDate',getDate(this));   // 시작일 = 종료일-1
  });

  function getDate(element){
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
      if(element.id == 'startDate'){
        date.setDate(date.getDate()+1); //종료일은 시작보다 하루 이후부터 지정할 수 있도록 설정
      }else{
        date.setDate(date.getDate()-1); //시작일은 종료일보다 하루 전부터 지정할 수 있도록 설정
      }
    } catch(error) {
        date = null;
    }
    return date;
  }
});

