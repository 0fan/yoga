$(function() {
  $('#datetimepicker').datepicker({
    format: 'yyyy年mm月dd日',
    todayBtn: true,
    clearBtn: true,
    todayHighlight: true,
    autoclose: true,
    language: 'zh-CN'
  })

  $(document).on('click', '.course-curriculum-title .course-curriculum-item', function(e) {
    $(this).addClass('active').siblings().removeClass('active')
    $('.course-curriculum-box').eq($(this).index()).addClass('active').siblings().removeClass('active')
  })

  $(".course-curriculum-content").mCustomScrollbar({
    theme: 'dark-3',
    scrollInertia: 0,
  })
})