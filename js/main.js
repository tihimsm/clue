$(function(){
  var menu_flag = false;
  $('#menu_button').hover(
    function(){
      $(this).transition({
        opacity: 0.9
      });
    },
    function(){
      $(this).transition({
        opacity: 0.2
      });
    }
  );

  $('#menu_button').click(function(){
    $(this).transition({
      rotate: '90deg',
      y: 75,
      width: 200
    },function(){
      $(this).transition({
        scale: [1, 50.2]
      },function(){
        $('#menu_text').remove();
      });
    });
    $('#menu_text').transition({ opacity: 0},function(){
      menu_flag = true;
    });
  });

  $('body').click(function(){
    if(menu_flag){
      menu_flag = false;
      $('#menu_button').transition({
        scale: [1, 1]
      },function(){
        $(this).transition({
          rotate: '0deg',
          y: 0,
          width: 300
        },function(){
          $(this).prepend('<a id="menu_text">MENU</a>');
        });
      });
    }else{
      return false;
    }
  });
});