$(function(){
  var body_flag = false;
  var menu_flag = true;

  function menuHover(menu){
    $(menu).hover(
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
  }

  function menuOpen(){
    $('#menu_button').click(function(){
      if(menu_flag){
        menu_flag = false;
        $(this).transition({
          rotate: '90deg',
          y: 150,
          width: 200,
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
            $('#menu_list').append('<li>about</li>')
            .append('<li>about</li>')
            .append('<li>about</li>')
            .append('<li>about</li>');
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
      $('#menu_list').transition({
        width: 0,
        opacity: 0
      },function(){
        menu_flag = true;
        $.when($(this).remove())
        .then($('#menu_inner').prepend('<div id="menu_button" style="left: -150px; opacity: 0; width: 200px; height: 0; transform: rotate(90deg);"></div>'))
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
    }else{
      return false;
    }
  });
});