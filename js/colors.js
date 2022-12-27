$(function () {

    if ($('div#top')[0].innerText == 103 || $('div#top')[0].innerText == 147) {

        $('body').append('<div class="selector-color-options"></div>');
        $('.selector-color-options').append('<a href="grey.css" class="selector-color-default"></a>');
        $('.selector-color-options').append('<a href="blue.css" class="selector-color-blue"></a>');
        $('.selector-color-options').append('<a href="green.css" class="selector-color-green"></a>');
        $('.selector-color-options').append('<a href="red.css" class="selector-color-red"></a>');
        $('.selector-color-options').append('<a href="yellow.css" class="selector-color-yellow"></a>');
        $('.selector-color-options').append('<a href="pink.css" class="selector-color-pink"></a>');

        $('body').append(
            '<style>\
            .selector-color-options {\
                right: 20px;\
                bottom: 20px;\
                position: relative;\
                z-index: 9;\
            }\
            .selector-color-options a {\
                width: 40px;\
                height: 40px;\
                margin-left: 10px;\
                border-radius: 50%;\
                display: inline-block;\
                box-shadow: 0 2px 10px rgba(0,0,0,0.4);\
            }\
            .selector-color-default { background: #545454; }\
            .selector-color-blue { background: #2b5d96; }\
            .selector-color-green { background: #015d0d; }\
            .selector-color-red { background: #960909; }\
            .selector-color-yellow { background: #ebaf3dx; }\
            .selector-color-pink { background: #af0347; }\
         </style>'
        );
    };

    $('[class^="selector-color-"]').click(function (event) {

        event.preventDefault();
        event.stopPropagation();

        var newColor = $(this).attr('href');

        $.ajax({
            url: location.origin + $('#BackgroundSite').val(),
            data: {
                des_cor_background_sit: newColor
            },
            type: "POST",
            dataType: "JSON",
            cache: false,
            success: function (data) {
                location.reload();
            },
            error: function () {
                swal({
                    title: "Erro",
                    text: "Ocorreu um erro ao tentar alterar a cor do site!",
                    type: 'error',
                    animation: false
                });
            }
        });
    });
});
