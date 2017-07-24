// 视频播放
$(function() {

  $(document).on('click', '[data-url]', (e) => {
    e.preventDefault()

    let player = $('#player')

    if (!player.length) {
      return
    }

    let $el = $(e.target)

    if (!$el.hasClass('video-item')) {
      $el = $el.parents('.video-item')
    }

    player
      .attr('src', $el.data('url'))
      .on('load', () => {
        $el
          .addClass('active')
          .siblings()
          .removeClass('active')
      })


  })

})