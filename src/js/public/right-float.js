$(function() {

  $(document).on('click', '.right-float-item a', (e) => {
    
    if ($(e.target).attr('href').indexOf('#') === 0) {
      e.preventDefault()
    }

  })


  $(document).on('click', '.right-float-item-gotop a', (e) => {

    $("body").animate({"scrollTop": 0})

  })

})