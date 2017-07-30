import './public/right-float'

$(function() {

  let $preview  = $('.introduce-preview')

  $(document).on('click', '.introduce-preview-item', (e) => {
    
    let $el = $(e.target)

    if ($el.is('img')) {
      $el = $el.parents('.introduce-preview-item')
    }

    let $el_img    = $('> img', $el),
        $prev_img  = $('> img', $preview)

    $prev_img.attr('src', $el_img.attr('src'))

    $prev_img.one('load', (e) => {

      $el.addClass('active').siblings().removeClass('active')
      $('.introduce-preview-title', $preview).text($el.attr('title'))
    })


  })

})