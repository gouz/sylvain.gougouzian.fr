$ = jQuery

$(document).ready ->
  $('body').on('click', '.page-scroll a', (event) ->
    $anchor = $ this
    $('html, body').stop().animate {
      scrollTop: $($anchor.attr 'href').offset().top
    }, 1500
    event.preventDefault()
  ).on('input propertychange', '.floating-label-form-group', (event) ->
    $(this).toggleClass 'floating-label-form-group-with-value', !! $(event.target).val()
  ).on('focus', '.floating-label-form-group', ->
      $(this).addClass 'floating-label-form-group-with-focus'
  ).on('blur', '.floating-label-form-group', ->
      $(this).removeClass 'floating-label-form-group-with-focus'
  ).scrollspy {
    target: '.navbar-fixed-top'
  }

  $('.navbar-collapse ul li a').on 'click', ->
    $('.navbar-toggle:visible').click()

  if (~~($(window).width()) > 768)
    $('#lifetime').lifetime()
