$(function(){

    // $('.list_inner .tab').hover( function(event) {
    //     var id = $(this).attr('data-id');
    //         $('.list_inner').find('.tab-item').removeClass('active-tab').hide();
    //         $('.list_inner .tabs').find('.tab').removeClass('active');
    //         $(this).addClass('active');
    //         $('#'+id).addClass('active-tab').fadeIn();
    //         return false;
    //     });
        $('.list_inner .tab').on('click' , function(event) {
            var id = $(this).attr('data-id');
                $('.list_inner').find('.tab-item').removeClass('active-tab').hide();
                $('.list_inner .tabs').find('.tab').removeClass('active');
                $(this).addClass('active');
                $('#'+id).addClass('active-tab').fadeIn();
                return false;
        });

        $('.reviews__tabs-tab').on('click', function(event) {
            var id = $(this).attr('data-id');
                $('.reviews__inner').find('.reviews__content-item').removeClass('active-tab').hide();
                $('.reviews__tabs').find('.reviews__tabs-tab').removeClass('active');
                $(this).addClass('active');
                $('#'+id).addClass('active-tab').fadeIn();
                return false;
            });



            


});

