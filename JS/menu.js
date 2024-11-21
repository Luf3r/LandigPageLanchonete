$(document).ready(function(){
    $('.mobile-btn').on('click', function(){
        $('.mobile-menu').toggleClass('active');
        $('.monile-btn').find('i').toggleClass('fa-x');
    })
})