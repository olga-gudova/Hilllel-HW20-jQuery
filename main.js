$('.box-1').on('click', function(e) {
   
    let $num = +$(e.target).closest('.counting').children('span').text();
    
    if ($(e.target).hasClass('btn-less')) {
        if ($num > 0) { 
            $(e.target).closest('.counting').children('span').text(--$num);

        }
    } else if ($(e.target).hasClass('btn-more')) {
        $(e.target).closest('.counting').children('span').text(++$num);
    }
});

let count = 1;

$('.box-2').on('click', function(e) {
    count++;

    if ($(e.target).hasClass('magical')) {
        $(e.target).css('order', count);

        if ($(e.target).hasClass('blue')) {
            $(e.target).removeClass('blue').addClass('green');
        } else if ($(e.target).hasClass('green')) {
            $(e.target).removeClass('green').addClass('yellow');
        } else if ($(e.target).hasClass('yellow')) {
            $(e.target).removeClass('yellow').addClass('blue');
        } else {
            $(e.target).addClass('blue');
        }
    }
});