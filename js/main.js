$(function() {
  /*
  var csObj = new Object();
  csObj.theme="dark";
  $('.second-menu').mCustomScrollbar(csObj);
  */

  $('#top-menu-myself').attr('data-content', $('#top-menu-body-myself').html());
  $('#top-menu-social').attr('data-content', $('#top-menu-body-social').html());

  if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    $('#top-menu-myself').attr('data-trigger', 'hover');
    $('#top-menu-social').attr('data-trigger', 'hover');
  }

  $('#top-menu-myself').popover({delay: { "show": 500, "hide": 100 }});
  $('#top-menu-social').popover({delay: { "show": 500, "hide": 100 }});
});