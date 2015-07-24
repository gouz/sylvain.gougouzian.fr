$ = jQuery

$(document).ready ->
  $('body').on('click', '.page-scroll a', (event) ->
    $anchor = $(this)
    $('html, body').stop().animate
      scrollTop: $($anchor.attr 'href').offset().top
    , 1500
    false
  ).scrollspy {
    target: '.navbar-fixed-top'
  }

  $('.navbar-collapse ul li a').on 'click', ->
    $('.navbar-toggle:visible').click()

  if (~~($(window).width()) > 768)
    $('#lifetime').lifetime()
    setTimeout ->
      $('.ltp_next').trigger 'click'
    , 100
