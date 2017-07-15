$(function() {

  $(document).on('click', '.course-curriculum-title .course-curriculum-item', function(e) {
    $(this).addClass('active').siblings().removeClass('active')
    $('.course-curriculum-box').eq($(this).index()).addClass('active').siblings().removeClass('active')
  })

  $(".course-curriculum-content").mCustomScrollbar({
    theme: 'light-3',
    scrollInertia: 0,
  })
})

