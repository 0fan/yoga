

$(document).on('click', '.teacher-item', (e) => {
  let $el = $(e.target)

  if (!$el.hasClass('teacher-item')) {
    $el = $el.parents('.teacher-item')
  }

  let img = new Image()

  img.src = $el.find('.teacher-preview img').attr('src')

  img = $(img)

  img.appendTo($('body'))

  img.on('load', (e) => {
    layer.open({
      type: 1,
      scrollbar: false,
      title: false,
      maxWidth: 1000,
      // closeBtn: 0,
      content: img,
      cancel: () => {
        img.off().remove()
      }
    })
  })

});