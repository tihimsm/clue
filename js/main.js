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
        scale: [1, 50]
      },function(){
        console.log('testttt');
      });
    });
    $('#menu_text').transition({ opacity: 0},function(){
      menu_flag = true;
    });
  });

  $('body').click(function(){
    if(menu_flag){
      console.log('click test');
    }else{
      return false;
    }
  });
});