(function(){

    // Extend jQuery with 'animateCSS' funciton
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    // add 'open' class when navbar-toggle is opened
    $('#navbar').on('show.bs.collapse', function() {
        $(this)
            .prev('.navbar-header')
            .find('.navbar-toggle')
            .addClass('open');
    });
    // remove 'open' class when navbar-toggle is closed
    $('#navbar').on('hide.bs.collapse', function() {
        $(this)
            .prev('.navbar-header')
            .find('.navbar-toggle')
            .removeClass('open');
    });

    // toggle skill item open/closed
    $('.skill-item-info button').on('click', function() {
        var $container = $(this).closest('.skill-item-info');
        $container.toggleClass('open');
    });


}());
