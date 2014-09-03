$(function() {
  $('#top-menu-myself').attr('data-content', $('#top-menu-body-myself').html());
  $('#top-menu-myself').popover();

  $('#top-menu-social').attr('data-content', $('#top-menu-body-social').html());
  $('#top-menu-social').popover();
});