$(function(){
  var body_flag = false;
  var menu_flag = true;

  function menuHover(menu){
    $(menu).hover(
      function(){
        $(this).transition({
          opacity: 0.8
        });
        if(menu === '#menu_button') {
          $(this).css("cursor","pointer");
        }
      },
      function(){
        $(this).transition({
          opacity: 0.2
        });
      }
    );
  }

  $('.animsition').animsition({
    inClass: 'zoom-in-sm',
    outClass: 'zoom-out-sm',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

  function menuOpen(){
    $('#menu_button').click(function(){
      if(menu_flag){
        menu_flag = false;
        $(this).transition({
          rotate: '90deg',
          left: -150,
          width: 150,
          height: 0,
          opacity: 0
        },function(){
          $.when($(this).remove())
          .then($('#menu_inner').prepend('<ul id="menu_list"></ul>'))
          .then($('#menu_list').transition({
            width: '100%',
            opacity: 0.2
          }, function(){
            menuHover('#menu_list');
            $.when($('#menu_list').append('<li><a id="aboutLink" href="about.html">About</a></li>')
            .append('<li><a href="about.html">Infomation</a></li>')
            .append('<li><a href="about.html">Works</a></li>')
            .append('<li><a href="about.html">Contact</a></li>'))
            .then($('#menu_list li a').transition({
              opacity: 1
            }));
            body_flag = true;
          }));
        });
      }else{
        return false;
      }
    });
  }

  menuHover('#menu_button');
  menuOpen();

  $('body').click(function(e){
    if(body_flag){
      var target = e.target;
      if (target.id === 'menu_list') {
        return false;
      }
      body_flag = false;
      $('#menu_list li a').transition({
        opacity: 0
      }, function(){
        $('#menu_list').transition({
          width: 0,
          opacity: 0
        },function(){
          menu_flag = true;
          $.when($(this).remove())
          .then($('#menu_inner').prepend('<div id="menu_button" style="left: -150px; opacity: 0; width: 150px; height: 0; transform: rotate(90deg);"></div>'))
          .then($('#menu_button').prepend('<a style="">MENU</a>'))
          .then($('#menu_button').transition({
            rotate: '0deg',
            left: 0,
            width: 300,
            height: 50,
            opacity: 0.2
          },function(){
            menuHover('#menu_button');
            menuOpen();
          }));
        });
      });
    }else{
      return false;
    }
  });
});