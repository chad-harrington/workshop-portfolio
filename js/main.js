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

    // toggle skill item open/closed
    $('.skill-item-info button').on('click', function() {
        var $container = $(this).closest('.skill-item-info');
        $container.toggleClass('open');
    })


}());
