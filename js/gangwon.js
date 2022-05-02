(function($){



//객체 타입 (object)
  $('.main-btn').on({
    mouseenter: function(){
      $('.main-btn').on('mouseenter',function(){
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);
    
        $('.main-btn').removeClass('on');
        $(this).addClass('on');
      })
    },
      //키보드 접근성 포커스인
    focusin: function(){
      $('.main-btn').focusin(function(){
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);
    
        $('.main-btn').removeClass('on');
        $(this).addClass('on');
    } );
    }
  });

    
  $('#nav').on({
    mouseleave:function(){
      $('.sub').stop().fadeOut(300);
      $('.main-btn').removeClass('on');
    }
  });
//ES5
  $('.main-btn').on({
    mouseenter:function(){

    },
    focusin:function(){

    }
  });
  //ES6
  $('.main-btn').on({
    mouseenter(){

    },
    focusin(){

    }

    
  });

  //메인슬라이드
  let cnt=0;
 
  // 페이드 인 (fadeIn) 서서히 부드럽게 보이는 효과 애니메이션
  // 페이드 아웃 (fadeOut) 서서히 부드럽게 사라지는 효과 애니메이션

  // css 속성중 스타일 효과: opacity를 활용 제작 가능
  // 제이쿼리 fadeIn() fadeOut() 매서드를 활용 제작가능
  //1.메인슬라이드함수
  function mainSlide(){
    $('.slide').css({zIndex:1}).animate({opacity:1},0);
    $('.slide').eq(cnt).css({zIndex:2});
    $('.slide').eq(cnt===0?2:cnt-1).css({zIndex:3}).animate({opacity:0},600);

  }

  //2.다음카운트 함수
  function nextCount(){
    cnt++;
    cnt>2?cnt=0:cnt;
    mainSlide()
  }

  //3.오토타이머 함수
  function autoTimer(){
    setInterval(nextCount,3000)
  }
  autoTimer()



  //공지사항 & 갤러리 탭메뉴 클릭 이벤트
  // 갤러리버튼 클릭

  $('.gallery-btn').on({
    click:function(){ //마우스는 클릭 키보드는 엔터(enter)
      $('.notice-btn').addClass('on');
      $('.gallery-btn').addClass('on');
      $('.notice-box').addClass('on');
      $('.gallery-box').addClass('on');
    }
  })

  // 공지사항버튼 클릭

  $('.notice-btn').on({
    click:function(){
      $('.notice-btn').removeClass('on');
      $('.gallery-btn').removeClass('on');
      $('.notice-box').removeClass('on');
      $('.gallery-box').removeClass('on');
    }
  })

  //팝업창(레이드팝업창)(모달창)

  $('.link-btn').on({
    click:function(){
      $('#modal').fadeIn(300);
    }
  });


  $('.close-btn').on({
    click:function(){
      $('#modal').fadeOut(300);
    }
  })

})(jQuery);