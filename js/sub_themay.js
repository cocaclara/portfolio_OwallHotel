'use strict';

$(document).ready(function(){

  $(window).scroll(function(){
    var $top = $(this).scrollTop();

    if($top >= 130){
      $('.sec2 p').css({ opacity: 1, top: 0 });
    }else{
      $('.sec2 p').css({ opacity: 0, top: '-50px' });
    }
  });
});

