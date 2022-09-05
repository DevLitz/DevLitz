window.addEventListener('load', () => {
    let click = 0
    const t = 500
    $('.config').click(() => {
        click++
        if(click > 1) {
            click = 0
            $('.box-config').fadeOut(t)
            clearInterval(intervalo)
        } else {
            $('.box-config').fadeIn(t).attr('style', 'display: flex;')
        }
    })

    $('.App').click(() => {
        $('.box-config').fadeOut(t)
    }) 

    $('.buy').click(() => {
        location.href='data.html'
    })

    $('.resize').click(function() {
        click++
        if(click > 1) {
            click = 0
            $(this).attr('src', 'img/full.png')
            document.querySelector('.App').animate([
                {marginLeft: '10px'},
                {marginLeft: '-10px'},
                {marginLeft: '0px'}
            ], {
                duration: 150,
                iterations: 1,
                fill: 'both',
            })
        } else {
            $(this).attr('src', 'img/resize.png')
            //...
        }
    })
})