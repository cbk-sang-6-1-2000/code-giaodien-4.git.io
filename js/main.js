$(document).ready(function () {
    $('#click-me').on({
        'mouseenter': function (event) {
            event.preventDefault();
            $('#menu-1').show();
            $(this).css('color', '#959595');
        },
        'mouseleave': function () {
            setTimeout(function () {
                if (!$('#menu-1:hover').length) {
                    $('#click-me').css('color', '#fff');
                    $('#menu-1').hide();
                }
            }, 100);
        }
    });

    $('#menu-1').on({
        'mouseenter': function () {
            $(this).show();
            $('#click-me').css('color', '#959595');
        },
        'mouseleave': function () {
            $('#menu-1').hide();
            $('#click-me').css('color', '#fff');
        }
    });
});

$(document).ready(function () {
    $('#click-me-2').on({
        'mouseenter': function (event) {
            event.preventDefault();
            $('#menu-2').show();
            $(this).css('color', 'black');
        },
        'mouseleave': function () {
            setTimeout(function () {
                if (!$('#menu-2:hover').length) {
                    $('#click-me').css('color', '#fff');
                    $('#menu-2').hide();                   
                }
            }, 100);
        }
    });

    $('#menu-2').on({
        'mouseenter': function () {
            $(this).show();
            
        },
        'mouseleave': function () {
            $('#menu-2').hide();
        }
    });
});
