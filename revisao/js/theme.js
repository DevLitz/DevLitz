window.addEventListener('load', () => {
  const defaul = $('.de')
  const black = $('.bk')
  const midnight = $('.md')
  const coffe = $('.co')
  const green = $('.gr')

  //Default
  $(defaul).click(original = () => {
    $('body').css('background', '#cd5c5c')
    $('.app-box').css('background', '#f08080')
    $('.de').css('background', '#cd5c5c')
    $('.bk').css('background', '#C0C0C0')
    $('.md').css('background', '#C0C0C0')
    $('.co').css('background', '#C0C0C0')
    $('.gr').css('background', '#C0C0C0')
  })


  //Black
  $(black).click(() => {
      $('body').css('background', '#1c1c1c')
      $('.app-box').css('background', '#3d3d3d')
      $(defaul).css('background', 'silver')
      $(black).css('background', '#1c1c1c')
      $(midnight).css('background', 'silver')
      $(coffe).css('background', 'silver')
      $(green).css('background', 'silver')
  })


  //Midnight
  $(midnight).click(() => {
    $('body').css('background', 'rgb(104,87,211)')
    $('.app-box').css('background', 'rgb(128,112,230)')
    $(defaul).css('background', 'silver')
    $(black).css('background', 'silver')
    $(midnight).css('background', 'rgb(128,112,230)')
    $(coffe).css('background', 'silver')
    $(green).css('background', 'silver')
  })


  //Coffe
  $(coffe).click(() => {
    $('body').css('background', '#d2b48c')
    $('.app-box').css('background', 'rgb(221, 188, 145)')
    $(defaul).css('background', 'silver')
    $(black).css('background', 'silver')
    $(midnight).css('background', 'silver')
    $(coffe).css('background', '#D2B48C')
    $(green).css('background', 'silver')
  })

  
  //Green
  $(green).click(() => {
    $('body').css('background', '#2e8b57')
    $('.app-box').css('background', '#3cb371')
    $(defaul).css('background', 'silver')
    $(black).css('background', 'silver')
    $(midnight).css('background', 'silver')
    $(coffe).css('background', 'silver')
    $(green).css('background', '#2E8B57')
  })
})
