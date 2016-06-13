$(function(){
  var menu_flag = false;
  $('#menu_button').hover(
    function(){
      $(this).transition({
        background: '#000'
      });
    },
    function(){
      $(this).transition({
        background: '#aaa'
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
        // height: '100%'
      })
    });
    // $(this).transition({ y: 75});
    // $(this).transition({ width: 200});
    $('#menu_text').transition({ opacity: 0},function(){
      menu_flag = true;
    });
  });

  $('body').click(function(){
    if(menu_flag){
      $('#menu_text').transition({ opacity: 1});
    }else{
      return false;
    }
  });
});