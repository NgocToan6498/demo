$(function() {
    $('.nut').click(function(event) {
        $('.noidung').addClass('noidunghienra');
        $('.momo').addClass('momodira');

    });
    $('.nutdong,.momo').click(function(event) {
        $('.noidung').removeClass('noidunghienra');
        $('.momo').removeClass('momodira');

    });

});