//separar as funções em arquivos bem legíveis
window.addEventListener('load', () => {
  let min = 14 
  let seg = 60
  let barraDeProgresso = 0
  let vrelogio = 0 

  //inicia o contador
  $('.iniciar').click(function() {
    $(this).attr('disabled', true)
    contador = setInterval(iniciarContagem, 1000) 

    //Verifica se a contagem chegou em 60seg, se sim define minuto como 0 e seg como 60
    //Trecho para resolver um pequeno bug quando a contagem chega próximo a 1:00
    function iniciarContagem() { 
      if(min === 1 && seg === 1) {min = '00', seg = 60}

      seg--
      //arrumar essa barra de progresso
      barraDeProgresso += 0.062
      $('.progressbar').animate({
        width: '0%',
        width: barraDeProgresso + '%'
      }, {
        duration: 1000,
        iterations: 1,
        fill: 'both'
      })

      if(seg === 0) {
        min--
        $('.relogio').html(min + ':' + seg)
        seg = 60
      } else if(min < 0){
          clearInterval(contador)
          $('.relogio').html('00:00')
          $('#check').is(':checked')? $('.pNota').html('+') && $('.rem').hide() : ''

          const alertas = [
            'Tudo Pronto! Faça uma pausa para um  lanche :D',
            'Ok, hora de um descanço!',
            'Curta um pouco a natureza, Faz bem :)',
            'Ótimo trabalho, lembre-se de se hidratar a cada pausa!',
            'Nada mais satisfatório do que concluir uma tarefa :D',
            'Estressado? Nada que uma pausa não resolva!',
            'Gostou? Ajude o desenvolvedor e visite a página e dê um feedback.'
          ]

          const indice = () => {
            const i = Math.random() * 6
            return i.toFixed(0)
          }

          alert(alertas[indice()])
      } else{
          seg < 10 ? seg = '0' + seg : ''
          $('.relogio').html(min + ':' + seg) 
      }
    }
  })

  //para o contador
  $('.parar').click(function() {
    $('.iniciar').attr('disabled', false)
    clearInterval(contador)
  })

  //reseta o contador
  $('.resetar').click(function() {
    switch(vrelogio) {
      case 0:
        clearInterval(contador)
        $('.iniciar').attr('disabled', false)
        $('.relogio').html('15:00')
        min = 14, seg = 60
      break;

      case 1:
        clearInterval(contador)
        $('.iniciar').attr('disabled', false)
        $('.relogio').html('3:00')
        min = 2, seg = 60
      break;

      case 2:
        clearInterval(contador)
        $('.iniciar').attr('disabled', false)
        $('.relogio').html('5:00')
        min = 4, seg = 60
      break;

      case 3:
        clearInterval(contador)
        $('.iniciar').attr('disabled', false)
        $('.relogio').html('15:00')
        min = 14, seg = 60
      break;
    }
  })

  // descanso
  $('.addtree').click(function() {
    clearInterval(contador)
    $('.relogio').html('5:00')
    $('.iniciar').attr('disabled', false)
    min = 4, seg = 60, vrelogio = 1
  })

  //adiciona 3 minutos ao contador
  $('.addtree').click(function() {
    clearInterval(contador)
    $('.relogio').html('1:00')
    $('.iniciar').attr('disabled', false)
    min = 0, seg = 60, vrelogio = 1
  })

  //adiciona 5 minutos ao contador
  $('.addfive').click(function() {
    clearInterval(contador)
    $('.relogio').html('20:00')
    $('.iniciar').attr('disabled', false)
    min = 19, seg = 60, vrelogio = 2
  })

  //adiciona 15 minutos ao contador
  $('.addfifteen').click(function() {
    clearInterval(contador)
    $('.relogio').html('25:00')
    $('.iniciar').attr('disabled', false)
    min = 24, seg = 60, vrelogio = 3
  })

  //adicionar uma nota
  $('.add').click(function() {
    $(this).click(function() {
      $('input').css('border', 'none')
      const tarefaDigitada = $('input').val()
      if(tarefaDigitada.length <= 40) {
        $('.pNota').html(tarefaDigitada)
        //Se a nota for adicionada em duplicata, mantém somente uma nota.
        for (i in $('pNota').val()) {
          i > 0? nota[1].remove() : ''  
        }
        $('.rem').show()
      } else {
        $('input').css('border', '1px solid crimson')
      }
    })
  })

  //remover uma nota
  $('.rem').click(function() {
    $('.pNota').html('+')
    $(this).hide()
  })
})
